import React, { useState, useRef, useEffect } from "react";


export default function Timer() {
const [time, setTime] = useState(0);
const ref = useRef(null);
useEffect(() => () => clearInterval(ref.current), []);
const start = () => ref.current || (ref.current = setInterval(() => setTime(t => t + 1), 1000));
const stop = () => { clearInterval(ref.current); ref.current = null; };
return (
<div className="card">
<h3>Timer</h3>
<div>{time}s</div>
<button onClick={start}>Start</button>
<button onClick={stop}>Pause</button>
<button onClick={() => { stop(); setTime(0); }}>Reset</button>
</div>
);
}