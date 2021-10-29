import React from 'react'; 

import { useCounter } from '../../ContextProvider/count';

export default function Message() { 
    const { count } = useCounter()

    return ( 
        <> 
            <h1> Contador: {count} </h1>
        </> 
    )
}