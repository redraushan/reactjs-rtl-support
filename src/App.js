import React from 'react';
import './App.css';
import useRTL, { RTLContext } from './hooks/useRTL';
import ToggleRTL from './ToggleRTL';

function App() {
  const [isRTL, setIsRTL] = useRTL();
  const greetText = isRTL ? '!مرحبا بالعالم' : 'Hello world!';
  return (
    <RTLContext.Provider value={{ value: isRTL, setValue: setIsRTL }}>
      <div className='App'>
        <h3 className='App-paragraph'>{greetText}</h3>
        <ToggleRTL />
      </div>
    </RTLContext.Provider>
  );
}

export default App;
