import React, { useState } from "react";

export default function PasswordStrength() {
  const [pw, setPw] = useState("");
  const score = (s) => [s.length >= 8, /[a-z]/.test(s) && /[A-Z]/.test(s), /\d/.test(s), /[^A-Za-z0-9]/.test(s)].filter(Boolean).length;
  const pts = score(pw);
  const label = pts <= 1 ? "Weak" : pts === 2 ? "Medium" : "Strong";
  return (
    <div className="card">
      <h3>Password Strength</h3>
      <input value={pw} onChange={(e) => setPw(e.target.value)} />
      <div>{label}</div>
      <div style={{ background: "#eee", height: 8 }}>
        <div style={{ width: `${(pts / 4) * 100}%`, background: pts <= 1 ? "#f66" : pts === 2 ? "#fd0" : "#6f6", height: "100%" }} />
      </div>
    </div>
  );
}