import React from "react";
import CodeEditor from "./CodeEditor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>react-simple-code-editor</h1>
      <p>A simple no-frills code editor with syntax highlighting.</p>
      <a
        href="https://github.com/FormidableLabs/react-simple-code-editor"
        className="github-button"
      >
        GitHub
      </a>
      <CodeEditor language="jsx" />
    </div>
  );
}

export default App;
