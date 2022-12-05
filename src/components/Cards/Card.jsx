import { ImgCard } from "../ImgCard/ImgCard"
import "./cardPoke.scss"


export const Card = (props) => {
const {name, sprites, id, types} = props

  return (
    <>
    <div className="card_poke">
        <ImgCard src={sprites} alt={name}></ImgCard>
        <h2 className="card_poke_id"># {id}</h2>
        <h3 className="card_poke_name">{name}</h3>
        <h4 className="card_poke_type">Type: {types[0]?.type.name}</h4>
        
    </div>
    </>

  )
}
