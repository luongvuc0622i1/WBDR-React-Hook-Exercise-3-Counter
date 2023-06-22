import { useState } from "react";

export default function useIncrement(addAmount) {
    const [count, setCount] = useState(0);

    const increment = () => {
        const newValue = count + addAmount;
        setCount(newValue);
    }

    return [count, increment];
}