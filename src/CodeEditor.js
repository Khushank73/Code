import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism.css";
import "./CodeEditor.css";

const CodeEditor = ({ language }) => {
  const [code, setCode] = useState(
    `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`
  );

  const highlightCode = (code) => {
    return Prism.highlight(code, Prism.languages[language], language);
  };

  return (
    <div className="code-editor-container">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={highlightCode}
        padding={10}
        className="code-editor"
        textareaId="codeArea"
        textareaClassName="code-input"
        preClassName="code-output"
      />
    </div>
  );
};

export default CodeEditor;
