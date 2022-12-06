import LinkItem from "../LinkItem/LinkItem"
import './navBar.scss'
import '../LinkItem/linkItem.scss'
import {useContext} from 'react'
import {TaskContext} from '../../context/TaskContext'

export const NavBar = () => {
  const {tasks} = useContext(TaskContext)


  return (
    <>
        <nav className="nav">
            <h2 className="nav__logo">React Practice</h2>
            <ul className="nav__list">
                <LinkItem props="links" to="/">Home</LinkItem>
                <LinkItem props={tasks.length <= 0 ? "task_counter_empty" : "task_counter_full"} to="todolist">To Do List</LinkItem>
                <LinkItem props="links" to="pokeapi">PokeApi</LinkItem>
            </ul>
        </nav>
    </>
  )
}

export default NavBar