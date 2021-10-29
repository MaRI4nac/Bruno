import React from 'react'; 
import { useMessage } from '../../ContextProvider/message';

export default function Message() { 
    const { message, setMessage } = useMessage(); 
    
    return (
        <> 
           <h1> Message Mirror: {message}  </h1>
        </> 
    )
}