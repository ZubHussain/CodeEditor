import { useState } from "react";
import { allQuestions } from "../data/questions";

const LANGUAGES = [
  { value: "all", label: "All Languages" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
  { value: "cpp", label: "C++" },
];

// Display label for the badge on each card — matches the lowercase
// `targetLanguage` values actually stored in questions.js.
const LANGUAGE_LABELS = {
  python: "Python",
  java: "Java",
  javascript: "JavaScript",
  cpp: "C++",
};

export default function Dashboard({ onSelectQuestion }) {
  const [filterTarget, setFilterTarget] = useState("all");

  const filteredQuestions =
    filterTarget === "all"
      ? allQuestions
      : allQuestions.filter((q) => q.targetLanguage === filterTarget);

  // Counts per language, computed from the real data, so the dropdown
  // stays correct even if questions.js is edited later.
  const languageCounts = allQuestions.reduce((counts, q) => {
    counts[q.targetLanguage] = (counts[q.targetLanguage] || 0) + 1;
    return counts;
  }, {});

  const getDifficultyColor = (diff) => {
    if (diff === "Easy") return "text-green-400";
    if (diff === "Medium") return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">CodeArena</h1>
          <p className="text-slate-400 mt-2">
            Select a problem to start coding.
          </p>
        </div>

        <select
          value={filterTarget}
          onChange={(e) => setFilterTarget(e.target.value)}
          className="bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-2 focus:outline-none"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
              {lang.value !== "all" ? ` (${languageCounts[lang.value] || 0})` : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Result count */}
      <p className="text-slate-500 text-sm mb-4">
        {filteredQuestions.length} problem
        {filteredQuestions.length !== 1 ? "s" : ""}
      </p>

      {/* Questions Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredQuestions.map((q) => {
          const hiddenCount = q.testCases.filter((tc) => tc.isHidden).length;

          return (
            <div
              key={q.id}
              onClick={() => onSelectQuestion(q)}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg p-5 cursor-pointer transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-semibold text-white">
                    {q.title}
                  </h2>

                  <span
                    className={`text-sm font-semibold ${getDifficultyColor(
                      q.difficulty
                    )}`}
                  >
                    {q.difficulty}
                  </span>
                </div>

                <p className="text-slate-400 text-sm">{q.description}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="inline-block bg-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full">
                  {LANGUAGE_LABELS[q.targetLanguage] || q.targetLanguage}
                </span>

                <span className="text-slate-500 text-xs">
                  {q.testCases.length} tests · {hiddenCount} hidden
                </span>
              </div>
            </div>
          );
        })}

        {filteredQuestions.length === 0 && (
          <p className="text-slate-500 col-span-full text-center py-12">
            No problems for this language yet.
          </p>
        )}
      </div>
    </div>
  );
}