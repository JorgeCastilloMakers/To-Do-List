import axios from "axios"
import { useState, useEffect } from "react"
import {useQuery} from "react-query"
import { Card } from "../../components/Cards/Card"
import { PokeLoader } from "../../components/loader/PokeLoader"


  const fetchPokes = ( url) => {
     
    return axios.get(url)
  }


export const PokeApi = () => {

  const [number, setNumber] = useState(1)
  let url = `https://pokeapi.co/api/v2/pokemon/${number}`
  const {isLoading, data, isError, error, refetch, isIdle} = useQuery('pokemons',fetchPokes(url),{
    refetchOnMount:false,
    refetchInterval: 2000,
    enabled: false
  })
  
  console.log(data)

  return (
    <>
      <h2>Poke Api</h2>
      <h2>Find your Pokemon</h2>

              <input type="number" onChange={(e) => setNumber(e.target.value)}
                value={number}
                autoFocus/>
              <button onClick={refetch} >Search</button>


      {isLoading && <PokeLoader></PokeLoader>}
      {isError && <h2 style={{color:'red', textAlign: 'center' } }>{error.message}</h2>}

      {/* {data?.data.map(pokemon => (
        <Card key={pokemon.id} {...pokemon} />
      ))} */}
    </>
  )
}

export default PokeApi