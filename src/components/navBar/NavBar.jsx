import LinkItem from "../LinkItem/LinkItem"


export const NavBar = () => {
  return (
    <>
        <nav>
            <h2>React Practice</h2>
            <ul>
                <LinkItem to="/">Home</LinkItem>
                <LinkItem to="todolist">To Do List</LinkItem>
                <LinkItem to="pokeapi">PokeApi</LinkItem>
            </ul>
        </nav>
    </>
  )
}

export default NavBar