
import React from 'react'
import './index.css'
import { useState } from 'react'

function Counter(props) {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)

    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }
    return (
        <div>
            <span>Current Count: {count}</span>
            <section>
                <button onClick={handleDecrement}>-</button>
                <button onClick={resetCount}>Reset</button>
                <button onClick={handleIncrement}>+</button>
            </section>
        </div>
    )
}


export default Counter
