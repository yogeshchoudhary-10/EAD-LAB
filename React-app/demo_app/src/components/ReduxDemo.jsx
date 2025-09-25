
import { useSelector, useDispatch } from "react-redux";


export default function ReduxDemo() {
const dispatch = useDispatch();
const value = useSelector((s) => s.globalCount);
return (
<div className="card">
<h3>Redux Demo</h3>
<div>{value}</div>
<button onClick={() => dispatch({ type: "INC" })}>Inc</button>
<button onClick={() => dispatch({ type: "DEC" })}>Dec</button>
<button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
</div>
);
}