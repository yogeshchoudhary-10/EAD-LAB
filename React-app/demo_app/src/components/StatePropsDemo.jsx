import  { useState } from "react";
function Child({ label }) {
return <div>Child received: {label}</div>;
}
export default function StatePropsDemo() {
const [text, setText] = useState("hello");
return (
<div className="card">
<h3>State vs Props</h3>
<input value={text} onChange={(e) => setText(e.target.value)} />
<Child label={text} />
</div>
);
}