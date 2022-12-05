import './imgCard.scss'

export const ImgCard = (src, alt) => {
  return (
    <img className='img_card' src={src?.src?.other?.home?.front_default} alt={alt?.alt} />
  )
}
