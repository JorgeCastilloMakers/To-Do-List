import { ModalMessage } from "../../components/modalMessage/ModalMessage"
import axios from "axios"
import { useState, useEffect } from "react"
import {useQuery} from "react-query"
import { Card } from "../../components/Cards/Card"
import { PokeLoader } from "../../components/loader/PokeLoader"
import "./pokeApi.scss"

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

        {number === ""  && <ModalMessage >Please choose a number</ModalMessage>}
        {number < 0  && <ModalMessage >You can´t choose a number less than zero</ModalMessage>}
        {isLoading && <PokeLoader></PokeLoader>}
        {isError && <h2 style={{color:'red', textAlign: 'center' } }>Sorry we can't find it
        <img src="https://i.gifer.com/XF7w.gif" style={{
          borderRadius: '50%', width:'12%', height:'160px',objectFit:'cover'}}/> </h2>}
        {data?.data && <Card key={data?.data.id} {...data?.data} />}
      </div>
    </>
  )
}

export default PokeApi