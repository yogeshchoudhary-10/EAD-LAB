import Timer from "../components/Timer";
import Counter from "../components/Counter";
import StatePropsDemo from "../components/StatePropsDemo";
import ReduxDemo from "../components/ReduxDemo";


export default function Home() {
return (
<div>
<h2>Home</h2>
<Timer />
<Counter />
<StatePropsDemo />
<ReduxDemo />
</div>
);
}