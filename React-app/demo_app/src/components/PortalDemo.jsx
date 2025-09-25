import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  const elRef = useRef(document.createElement("div"));
  useEffect(() => {
    document.body.appendChild(elRef.current);
    return () => document.body.removeChild(elRef.current);
  }, []);
  return createPortal(
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    elRef.current
  );
}

export default function PortalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <h3>Portal Demo</h3>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && <Modal onClose={() => setOpen(false)}>Hello from a Portal!</Modal>}
    </div>
  );
}