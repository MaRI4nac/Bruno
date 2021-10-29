import React from 'react'; 
import { useMessage } from '../../ContextProvider/message';

export default function Message() { 
    const { message, setMessage } = useMessage(); 

    return (
        <> 
           <h1> Message: </h1>

           <input type="text" value={message} onChange={e => setMessage(e.target.value)} /> 

           <button onClick={() => setMessage(message)}> Enviar </button>
        </> 
    )
}