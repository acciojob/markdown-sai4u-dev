import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [inputText, setInputText] = useState("");
  const [previewText, setPreviewText] = useState("");

  useEffect(() => {
    setPreviewText(inputText);
  }, [inputText]);

  return (
    <div className="app">
      <div className="input">
        <textarea
          className="textarea"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type Markdown here..."
        />
      </div>

      <div className="preview">
        <ReactMarkdown>{previewText}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;
