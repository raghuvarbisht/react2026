import { useState } from "react";

const Condition = () => {
    const [count, setCount]= useState(0)

    return ( 
        <div>
            <h1>counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}> Counter</button>

            {
              count === 1 ? <h1> count 1</h1> 
              : count === 2 ? <h1> count 2</h1> :
              count === 3 ? <h1> count 3</h1> :
              count === 4 ? <h1> count 4</h1> :
              count === 5 ? <h1> count 5</h1> : <h1> greater then 5 </h1>
            }

        </div>
    )

}

export default Condition;