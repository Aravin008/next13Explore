"use client";

import { useState } from "react";
interface CounterType {
    initialVal: number;
}
export default function Counter({initialVal}: CounterType): React.ReactNode  {
    const [count, setCount] = useState(initialVal || 0);

    const handleClick = (type: string) => {
        if(type == 'INC') {
            setCount(count+1);
            return;
        }
        setCount(count-1);
    }

    return (
        <div>
            <p>Count value: {count}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => handleClick('INC')}>Increment</button>
            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 mx-5 rounded" onClick={() => handleClick('DEC')}>Decrement</button>
        </div>
    )
}