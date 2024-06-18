import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"",
            completed: false
        }
    ],
    addtodo=(todo)=>{}
    updateTodo =(id,todo)=>{}
    deleteTodo =(id, todo)=>{}
    toggleComplete=(id)=>{}
})


export const useTodo =()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider