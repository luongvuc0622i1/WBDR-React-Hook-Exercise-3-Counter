import useIncrement from "../hooks/useIncrement";

export default function Counter2() {
    let [count, setCount] = useIncrement(2);

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={setCount}>Add 2</button>
        </div>
    );
}