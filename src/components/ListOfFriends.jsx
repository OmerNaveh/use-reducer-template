import { nanoid } from 'nanoid'
import React,{useContext} from 'react'
import userContext from '../context/userContext'
import ToggleEdit from './ToggleEdit'

export default function ListOfFriends() {
    const {list,dispatch} = useContext(userContext)
   
    
  
    const renderList =  list.map(friend=>
        (<p key={nanoid()}>{friend.name} | {friend.age} 
            <button onClick={()=>dispatch({type:'REMOVE_FRIEND',
            payload:{name:friend.name, age:friend.age}})}>remove</button>
            <ToggleEdit ogName = {friend.name}/>
        </p>
        )
    )
    return (
        <div>
            {renderList}
        </div>
    )
}
