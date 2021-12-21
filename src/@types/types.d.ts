declare namespace UsersType{
    interface action{
        type:string,
        payload:{name:string, age:number, queryName?:string}
    }
    type state = {name:string, age:number}[]
}