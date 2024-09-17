import React, { Children } from "react";
import UserContext from "./UserCOntext";


const UserContextProvider = ({children}) => {
  const [user, setUser] = React.useState(null)
  
return (
  <UserContext.Provider value={{ user,setUser}}>
    {children}
    </UserContext.Provider>
)
}
export default UserContextProvider