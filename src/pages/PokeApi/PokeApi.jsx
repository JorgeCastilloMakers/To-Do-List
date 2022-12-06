import { ModalMessage } from "../../components/modalMessage/ModalMessage"
import axios from "axios"
import { useState, useEffect } from "react"
import {useQuery} from "react-query"
import { Card } from "../../components/Cards/Card"
import { PokeLoader } from "../../components/loader/PokeLoader"
import "./pokeApi.scss"
import ImgMessage from "../../components/imgMessage/ImgMessage"

  const fetchPokes = (number) => {
    if(!number.queryKey[1]){
      return
    }else{
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${number.queryKey[1]}`)
    }
    
  }


export const PokeApi = () => {

  const [number, setNumber] = useState("")
  
  const {isLoading, data, isError, error, refetch} = useQuery(['pokemons', number],fetchPokes,{
    refetchOnMount:false,
    refetchInterval: 2000,
    enabled: false
  })
  

  return (
    <>
      <div className="pokeapi">
        <h2 className="pokeapi_title">Poke Api</h2>
        <h2 className="pokeapi_second_title">Find your Pokemon</h2>
        <div className="pokeapi_search">
            <input className="pokeapi_input" type="number" onChange={(e) => setNumber(e.target.value)}
            value={number}
            autoFocus/>
            <button className="pokeapi_btn" onClick={ refetch}>Search</button>
        </div>

        {number === ""  && <ModalMessage ><ImgMessage props={"https://i.pinimg.com/originals/7a/8e/54/7a8e54dc938227a34c6779bf5a0dee46.gif"}/>Please choose a number</ModalMessage>}
        {number < 0  && setNumber("")}
        {isLoading && <PokeLoader></PokeLoader>}
        {isError && <ModalMessage><ImgMessage props={"https://i.gifer.com/XF7w.gif"}/>Sorry we can't find it </ModalMessage> }
        {data?.data && <Card key={data?.data.id} {...data?.data} />}
      </div>
    </>
  )
}

export default PokeApi