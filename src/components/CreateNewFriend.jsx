import React,{useContext, useRef} from 'react'
import userContext from '../context/userContext'

export default function CreateNewFriend() {
    const {dispatch} = useContext(userContext);
    const nameInput = useRef(null)
    const ageInput = useRef(null)
    const addFriend = (e)=>{
        e.preventDefault()
        const name = nameInput.current.value
        const age = ageInput.current.value
        if(!name || !age) return
        dispatch({type:"ADD_FRIEND",payload:{name, age}})
        nameInput.current.value = ''
        ageInput.current.value=''
    }
    return (
      <form onSubmit={(e)=>{addFriend(e)}}>
          <span>
            Enter Name
            <input ref={nameInput}></input>
          </span>
          <span>
            Enter Age
            <input ref={ageInput}></input>
          </span>
          <button type='submit'>Add Friend</button>
      </form>
    )
}
