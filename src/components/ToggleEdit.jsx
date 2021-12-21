import React, { useState,useContext, useRef } from 'react'
import userContext from '../context/userContext'
export default function ToggleEdit(props) {
    const [open,setOpen] = useState(false)
    const {dispatch} = useContext(userContext)
    const nameInput = useRef(null)
    const ageInput = useRef(null)
    
    const updateFriend=()=>{
        const name = nameInput.current.value
        const age = ageInput.current.value
        dispatch({type:"UPDATE_FRIEND", payload:{age,name, queryName:props.ogName}})
        setOpen(false)
    }
    return(
    open ?
        <div>
            <span>Enter Name<input ref={nameInput}></input></span> 
            <span>Enter Age<input ref={ageInput}></input></span> 
            <button onClick={()=>{updateFriend()}}>Update</button>
        </div>
    :

       <button onClick={()=>{setOpen(true)}}> Edit</button>
    )
}
