import React, { useState } from "react";

export default function PasswordStrength() {
  const [password, setPassword] = useState('');
const [strength, setStrength] = useState('');
const evaluateStrength = (password) => {
if (password.length < 6) return 'Weak';
if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) return 'Strong';
return 'Moderate';
};
const handleChange = (e) => {
const pwd = e.target.value;
setPassword(pwd);
setStrength(evaluateStrength(pwd));
};
return (
<div>
  <h3>Password strength</h3>
<input type="password" value={password} onChange={handleChange} placeholder="Enter password" />
<p>Password Strength: {strength}</p>
</div>
);
}
