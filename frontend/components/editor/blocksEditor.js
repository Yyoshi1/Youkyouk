// frontend/components/editor/BlocksEditor.js
import React, { useState } from "react";

const ALLOWED_BLOCKS = ["TextBlock", "ImageBlock", "ProductBlock", "ButtonBlock"];

export default function BlocksEditor({ userRole }) {
  const [blocks, setBlocks] = useState([]);

  const addBlock = (type) => {
    if (!ALLOWED_BLOCKS.includes(type)) {
      alert("Block type not allowed for your role");
      return;
    }
    setBlocks([...blocks, { type, content: "" }]);
  };

  return (
    <div>
      <h2>Blocks Editor</h2>
      {ALLOWED_BLOCKS.map((type) => (
        <button key={type} onClick={() => addBlock(type)}>
          Add {type}
        </button>
      ))}
      <div>
        {blocks.map((block, i) => (
          <div key={i}>
            <h3>{block.type}</h3>
            <textarea placeholder="Content" />
          </div>
        ))}
      </div>
    </div>
  );
}
