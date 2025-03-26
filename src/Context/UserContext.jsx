import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export   const UserDataContext = createContext();

const UserContext = ({children}) => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    company: "",
    isAgency: Boolean
  })

  console.log(user);

  
  
  return (
    <div >
      <UserDataContext.Provider value={{user, setUser}}>
        {children}
      </UserDataContext.Provider>

    
       
      
    </div>
  )
}

export default UserContext
