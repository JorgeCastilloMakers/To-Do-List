import { ImgCard } from "../ImgCard/ImgCard"


export const Card = (props) => {
const {name, img, id, type} = props
  return (
    <>
    <div>
        <ImgCard src={img} alt={name}></ImgCard>
        <h2>{id}</h2>
        <h3>{name}</h3>
        <h4>{type}</h4>
        
    </div>
    </>

  )
}
