import React from 'react';
import './App.css';
import { RTLContext } from './hooks/useRTL';

function ToggleRTL() {
  return (
    <RTLContext.Consumer>
      {({ value, setValue }) => {
        return (
          <button
            className='App-toggleRTL'
            onClick={() => {
              setValue(!value);
            }}
          >
            Toggle RTL
          </button>
        );
      }}
    </RTLContext.Consumer>
  );
}

export default ToggleRTL;
