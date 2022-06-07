import React,{ useState} from 'react';

const Counter = () => {
    const [ count , setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count<10? count + 1: count)}>increse </button>
            <button onClick={() => setCount(count === 0? count : count - 1)}>decrese </button>
        </div>
    );
};

export default Counter;