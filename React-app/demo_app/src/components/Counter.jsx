import  { useState } from "react";

export default function Counter() {
const [count, setCount] = useState(0);
return (
<div className="card">
<h3>Local Counter</h3>
<div>{count}</div>
<button onClick={() => setCount(count + 1)}>+</button>
<button onClick={() => setCount(count - 1)}>-</button>
<button onClick={() => setCount(0)}>Reset</button>
</div>
);
}