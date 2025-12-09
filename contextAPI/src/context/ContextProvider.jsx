import React, { useState } from 'react'
import userContext from './UserContext'

const ContextProvider = ({children}) =>{
    const [user,setuser] = useState(null);
    return (
        <userContext.Provider value={{user,setuser}}>
            {children}
        </userContext.Provider>
    )
}

export default ContextProvider
