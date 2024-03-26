import { useState } from "react";


const HookOne = () => {
    const[value,setValue]=useState(0)
    const handleIncrement=()=>{
        const newValue=value+1
        setValue(newValue)
    }
    
    const handleDecrement=()=>{
        const newValue=value-1
        setValue(newValue)
    }

    return (
        <div>
            <h1>value:{value}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default HookOne;