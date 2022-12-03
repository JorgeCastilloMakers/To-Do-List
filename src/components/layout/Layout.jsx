

import { NavBar } from "../navBar/NavBar"



export const Layout = ({children}) => {
  return (
    <>
        <div className="container">
            <NavBar></NavBar>
            {children}
        </div>
        
    </>
  )
}
