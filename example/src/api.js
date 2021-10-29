import React from 'react';

import InputProvider from './ContextProvider/count'
import CountMirror from './Element/CountMirror'
import Count from './Element/Count/index'
import Message from './Element/Message';
import MessageMirror from './Element/MessageMirror'
import MessageProvider from './ContextProvider/message';

export default function Api() { 
  return ( 
    <> 
      <InputProvider> 
        <div> 
          <Count />

          <hr /> 

          <CountMirror /> 
        </div>
      </InputProvider>
      <MessageProvider> 
          <div> 
            <Message /> 

            <hr /> 

            <MessageMirror /> 
          </div>
      </MessageProvider>
    </> 
  )
}

