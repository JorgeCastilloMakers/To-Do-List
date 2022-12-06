
import {NavLink} from 'react-router-dom'
import './linkItem.scss'



export const LinkItem = ({children, to, props}) => {

  console.log("clase =>", props)

  return (
    <>
        
        <NavLink className={props} to={to}>{children}</NavLink>

    </>
  )
}

export default LinkItem