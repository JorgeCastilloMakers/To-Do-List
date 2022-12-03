
import { Layout } from '../components/layout/Layout'
import {Route, Routes as RoutesDom} from "react-router-dom"
import { Home } from '../pages/home/Home'
import ToDo from '../components/ToDoList/ToDo'
import PokeApi from '../pages/PokeApi/PokeApi'
import { Error404 } from '../pages/404/Error404'

export const Routes = () => {
  return (
    <>
    <Layout>
        <RoutesDom>
            <Route path="/" element={ <Home/> }/>
            <Route path="todolist" element={ <ToDo/> }/>
            <Route path="pokeapi" element={ <PokeApi/> } />
            <Route path="*" element={ <Error404/> } />
        </RoutesDom>
    </Layout>
    </>
  )
}

export default Routes