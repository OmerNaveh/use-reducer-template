import React, { useReducer } from 'react';
import userContext from './context/userContext';
import userReducer from './reducers/userReducer';


function App() {
  const [list, dispatch] = useReducer(userReducer, []);
  return (
    <userContext.Provider value={{list,dispatch}}>

    <div className="App">
    
    </div>
    </userContext.Provider>
  );
}

export default App;
