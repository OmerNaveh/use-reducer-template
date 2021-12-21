declare namespace UsersType{
    interface action{
        type:string,
        payload:{}
    }
    interface state{

    }
    type State = (state,action)=>void;
}