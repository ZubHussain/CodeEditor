import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

const BOILERPLATES = {
  python: 'def solve():\n    # Write your code here\n    pass\n\nif __name__ == "__main__":\n    solve()',
  java: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}',
  javascript: 'const fs = require("fs");\n\nfunction solve() {\n    const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\\n");\n    // Write your code here\n}\n\nsolve();',
  cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your code here\n    return 0;\n}'
};

// --- Icons ---
const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const CrossIcon = () => (
  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

const SpinnerIcon = () => (
  <svg className="w-5 h-5 text-blue-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export default function EditorWorkspace({ question, onBack }) {
  const [language, setLanguage] = useState(question.targetLanguage || 'python');
  const [code, setCode] = useState(BOILERPLATES[question.targetLanguage || 'python']);
  
  // Run State (Bottom Console)
  const [runResponse, setRunResponse] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Submit State (Modal)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResponse, setSubmitResponse] = useState(null);
  const [revealedCount, setRevealedCount] = useState(0);

  const visibleTestCases = question.testCases ? question.testCases.filter(tc => !tc.isHidden) : [];

  useEffect(() => {
    setCode(BOILERPLATES[language]);
  }, [language]);

  // Effect to cascade the test case results in the modal one by one
  useEffect(() => {
    if (submitResponse && !isSubmitting && revealedCount < question.testCases.length) {
      const timer = setTimeout(() => {
        setRevealedCount(prev => prev + 1);
      }, 300); // 300ms delay between revealing each test case
      return () => clearTimeout(timer);
    }
  }, [submitResponse, isSubmitting, revealedCount, question.testCases?.length]);

  // --- Handlers ---
  const handleRun = async () => {
    setIsRunning(true);
    setRunResponse(null);
    setActiveTab(0);
    
    try {
      const res = await fetch('http://18.225.111.102:8080/api/v1/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, code, testCases: visibleTestCases }),
      });
      setRunResponse(await res.json());
    } catch (error) {
      setRunResponse({ overallStatus: 'SERVER_ERROR', results: [] });
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = async () => {
    setIsModalOpen(true);
    setIsSubmitting(true);
    setSubmitResponse(null);
    setRevealedCount(0); // Reset the cascade animation
    
    try {
      const res = await fetch('http://18.225.111.102:8080/api/v1/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, code, testCases: question.testCases }),
      });
      setSubmitResponse(await res.json());
    } catch (error) {
      setSubmitResponse({ overallStatus: 'SERVER_ERROR', results: [] });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusColor = (status) => {
    if (status === 'ACCEPTED') return 'text-emerald-400';
    if (status === 'WRONG_ANSWER') return 'text-rose-500';
    return 'text-yellow-400';
  };

  const getFileExtension = (lang) => {
    if (lang === 'python') return 'py';
    if (lang === 'javascript') return 'js';
    if (lang === 'cpp') return 'cpp';
    return 'java';
  };

  return (
    <div className="flex flex-col h-screen bg-[#0f172a] text-slate-300 font-sans">
      
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#1e293b] border-b border-slate-800 shadow-sm">
        <button onClick={onBack} className="text-slate-400 hover:text-white flex items-center transition-colors">
          ← Back to Problems
        </button>
        
        <div className="flex items-center space-x-4">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#0f172a] border border-slate-700 text-white text-sm rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500"
          >
            <option value="python">Python 3</option>
            <option value="java">Java 21</option>
            <option value="javascript">Node.js</option>
            <option value="cpp">C++</option>
          </select>
          
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className="px-4 py-1.5 bg-[#334155] hover:bg-[#475569] text-white rounded-md text-sm transition-colors disabled:opacity-50"
          >
            {isRunning ? 'Running...' : 'Run Code'}
          </button>

          <button 
            onClick={handleSubmit}
            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-sm font-medium transition-colors"
          >
            Submit
          </button>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Left Panel: Description */}
        <div className="w-1/2 p-6 overflow-y-auto border-r border-slate-800">
          <h1 className="text-2xl font-bold text-white mb-2">{question.title}</h1>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${question.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-400' : question.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-rose-500/20 text-rose-400'}`}>
            {question.difficulty}
          </span>
          
          <div className="mt-6 text-slate-300 leading-relaxed whitespace-pre-wrap">
            {question.description}
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Visible Examples:</h3>
            {visibleTestCases.map((tc, idx) => (
              <div key={idx} className="mb-4 bg-[#1e293b] rounded-lg p-4">
                <p className="font-semibold text-white mb-2">Example {idx + 1}</p>
                <div className="mb-2">
                  <span className="text-slate-400 text-sm">Input:</span>
                  <pre className="mt-1 bg-[#0f172a] p-2 rounded text-sm font-mono">{tc.input}</pre>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Output:</span>
                  <pre className="mt-1 bg-[#0f172a] p-2 rounded text-sm font-mono">{tc.expectedOutput}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Editor & Console */}
        <div className="w-1/2 flex flex-col">
          
          {/* Editor Container */}
          <div className="flex-1 flex flex-col relative">
            <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-800 text-sm text-slate-400 font-mono">
              main.{getFileExtension(language)}
            </div>
            <div className="flex-1">
              <Editor
                height="100%"
                language={language === 'javascript' ? 'javascript' : language}
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value)}
                options={{ 
                  minimap: { enabled: false }, 
                  fontSize: 14, 
                  wordWrap: "on", 
                  padding: { top: 16 } 
                }}
              />
            </div>
          </div>

          {/* Execution Console (For Run Code) */}
          <div className="h-64 bg-[#1e293b] border-t border-slate-800 flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800">
              <span className="text-sm font-semibold text-slate-300">Console Output</span>
              {runResponse && (
                <span className={`text-sm font-medium ${getStatusColor(runResponse.overallStatus)}`}>
                  {runResponse.overallStatus.replace(/_/g, ' ')} ({runResponse.executionTimeMs || 0}ms)
                </span>
              )}
            </div>
            
            <div className="flex flex-1 overflow-hidden">
              {/* Tabs */}
              <div className="w-24 border-r border-slate-800 flex flex-col overflow-y-auto">
                {visibleTestCases.map((tc, idx) => {
                  const res = runResponse?.results?.[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`p-3 text-left text-sm border-b border-slate-800 transition-colors ${
                        activeTab === idx ? 'bg-[#0f172a] text-white' : 'text-slate-400 hover:bg-[#334155]'
                      } ${
                        res?.status === 'ACCEPTED' ? 'border-l-4 border-l-emerald-500' : 
                        res ? 'border-l-4 border-l-rose-500' : 'border-l-4 border-l-transparent'
                      }`}
                    >
                      Case {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="flex-1 p-4 overflow-y-auto bg-[#0f172a]">
                {!runResponse ? (
                  <p className="text-slate-500 text-sm mt-2">Click 'Run Code' to execute visible test cases.</p>
                ) : (
                  <div>
                    {runResponse.results[activeTab]?.status === 'ERROR' ? (
                      <div>
                        <span className="text-rose-500 font-semibold mb-2 block">Compilation / Runtime Error:</span>
                        <pre className="text-rose-400 text-sm whitespace-pre-wrap font-mono">
                          {runResponse.results[activeTab].errorOutput}
                        </pre>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <span className="text-slate-400 text-sm">Input:</span>
                          <pre className="mt-1 bg-[#1e293b] p-2 rounded text-sm font-mono text-slate-300">
                            {visibleTestCases[activeTab]?.input}
                          </pre>
                        </div>
                        
                        <div>
                          <span className="text-slate-400 text-sm">Your Output:</span>
                          <pre className="mt-1 bg-[#1e293b] p-2 rounded text-sm font-mono text-slate-300">
                            {runResponse.results[activeTab]?.actualOutput || ""}
                          </pre>
                        </div>
                        
                        <div>
                          <span className="text-slate-400 text-sm">Expected Output:</span>
                          <pre className="mt-1 bg-[#1e293b] p-2 rounded text-sm font-mono text-slate-300">
                            {runResponse.results[activeTab]?.expectedOutput}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- SUBMISSION MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1e293b] w-full max-w-md rounded-xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col">
            
            <div className="px-6 py-4 border-b border-slate-700 flex justify-between items-center">
              <h2 className="text-lg font-bold text-white">Submission Results</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="p-6 max-h-96 overflow-y-auto space-y-3">
              {question.testCases.map((tc, index) => {
                const isRevealed = index < revealedCount;
                const result = submitResponse?.results?.[index];
                const passed = result?.status === 'ACCEPTED';
                
                return (
                  <div key={index} className="flex items-center justify-between bg-[#0f172a] p-3 rounded-lg border border-slate-800">
                    <div className="flex items-center space-x-3">
                      {/* Status Icon */}
                      {!isSubmitting && isRevealed ? (
                        passed ? <CheckIcon /> : <CrossIcon />
                      ) : (
                        <SpinnerIcon />
                      )}
                      <span className="text-sm font-medium text-slate-300">
                        Test Case {index + 1} {tc.isHidden && <span className="text-slate-500 text-xs ml-1">(Hidden)</span>}
                      </span>
                    </div>
                    
                    {isRevealed && result && (
                      <span className={`text-xs font-bold ${getStatusColor(submitResponse.overallStatus === 'SERVER_ERROR' ? 'SERVER_ERROR' : result.status)}`}>
                        {submitResponse.overallStatus === 'SERVER_ERROR' ? 'Error' : `${result.status.replace(/_/g, ' ')}`}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Final Verdict Area */}
            <div className="p-4 bg-[#0f172a] border-t border-slate-700 text-center">
              {isSubmitting || revealedCount < question.testCases.length ? (
                <span className="text-slate-400 font-medium animate-pulse">Evaluating your code...</span>
              ) : (
                <span className={`text-lg font-bold ${getStatusColor(submitResponse?.overallStatus)}`}>
                  {submitResponse?.overallStatus === 'ACCEPTED' ? 'Success! All Test Cases Passed.' : 'Failed. Keep Trying!'}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}