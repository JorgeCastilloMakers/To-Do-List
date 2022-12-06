import './imgMessage.scss'

export const ImgMessage = ({props}) => {
    console.log(props)
  return (
    <img className='img_msg' src={props}/>
  )
}

export default ImgMessage