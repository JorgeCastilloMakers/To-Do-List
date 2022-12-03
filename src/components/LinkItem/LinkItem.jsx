
import {NavLink} from 'react-router-dom'

export const LinkItem = ({children, to}) => {
  return (
    <>
        
        <NavLink to={to}>{children}</NavLink>

    </>
  )
}

export default LinkItem