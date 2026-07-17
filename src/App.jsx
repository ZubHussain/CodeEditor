import { useState } from "react";
import Dashboard from "./components/Dashboard";
import EditorWorkspace from "./components/EditorWorkspace";

function App() {
  // If null, show Dashboard. If it holds an object, show the Editor.
  const [activeQuestion, setActiveQuestion] = useState(null);

  if (!activeQuestion) {
    return (
      <Dashboard
        onSelectQuestion={(question) => setActiveQuestion(question)}
      />
    );
  }

  return (
    <EditorWorkspace
      question={activeQuestion}
      onBack={() => setActiveQuestion(null)}
    />
  );
}

export default App;