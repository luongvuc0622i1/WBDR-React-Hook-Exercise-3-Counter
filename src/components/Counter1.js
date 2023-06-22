import useIncrement from "../hooks/useIncrement";

export default function Counter1() {
    let [count, setCount] = useIncrement(1);

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={setCount}>Add 1</button>
        </div>
    );
}