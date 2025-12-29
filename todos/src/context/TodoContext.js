import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "message",
            completed: true
        }
    ],
    addtodo: (todo) =>{},
    removeTodo: (id,todo) =>{},
    deleteTodo: (id) =>{},
    toogle: (id) =>{},
    updatetodo: (id) =>{},
})


export const usetodo = () => {
    return useContext(TodoContext)
} 

export const Todoprovider = TodoContext.Provider