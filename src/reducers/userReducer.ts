import { db } from "../DB";
export default function userReducer(state:UsersType.state,action:UsersType.action){
    switch (action.type) {
        case "INITIAL_STATE":
            return [...db];

        case "ADD_FRIEND":
            return [...state,{name:action.payload.name,age:action.payload.age}]

        case "REMOVE_FRIEND":
            const newArr = state.filter(({name})=> name!==action.payload.name)
            return newArr;
        
        case "UPDATE_FRIEND":
            const updatedArr = state.map(user=>{
                if(user.name===action.payload.queryName){
                    user.name =action.payload.name;
                    user.age= action.payload.age;
                } 
                return user;
            })
            return updatedArr;

        default:
            return state;
    }
}