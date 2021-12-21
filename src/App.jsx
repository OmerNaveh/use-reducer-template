import React, { useReducer } from 'react';
import userContext from './context/userContext';
import userReducer from './reducers/userReducer';
import { db } from './DB';
import ListOfFriends from './components/ListOfFriends';
import CreateNewFriend from './components/CreateNewFriend';

function App() {
  const [list, dispatch] = useReducer(userReducer, db);
  return (
    <userContext.Provider value={{list,dispatch}}>
      <button onClick={()=>{dispatch({type:"INITIAL_STATE"})}}>Initialize Data</button>
      <CreateNewFriend/>
      <ListOfFriends/>
    </userContext.Provider>
  );
}

export default App;
