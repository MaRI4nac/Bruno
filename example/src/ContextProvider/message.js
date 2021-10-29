import React, { createContext, useContext, useState } from 'react'; 

const messageContext = createContext(); 

export default function MessageProvider({children}) { 
    const [ message, setMessage ] = useState(); 

    return ( 
        <> 
            <messageContext.Provider value = {{
                message, 
                setMessage
            }}> 
                {children}
            </messageContext.Provider>
        </> 
    )
}

export function useMessage(){ 
    const context = useContext(messageContext); 
    const { message, setMessage } = context; 
    return { message, setMessage }; 
}   