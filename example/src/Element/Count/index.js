import React from 'react'; 
import { useCounter } from '../../ContextProvider/count';

// import { InputContext } from '../../ContextProvider';

export default function Message() { 
    // const { input, setInput } = useContext(InputContext); 
    const { count, setCount } = useCounter()

    return ( 
        <> 
                <h1> Contador: {count} </h1>
        
            <button onClick={() => setCount(count + 1)}> Incrementar </button>
        </> 
    )
}