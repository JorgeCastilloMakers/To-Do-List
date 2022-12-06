import BgCircles from '../../components/bgCircles/BgCircles'
import './home.scss'
import ImgProfile from '../../assets/images/profile_picture.png'
import LogoReact from '../../assets/images/react_logo.png'
import LogoRedux from '../../assets/images/react_redux_logo.png'
import LogoAxios from '../../assets/images/axios_logo.png'
import LogoQuery from '../../assets/images/react_query_logo.png'
import LogoSass from '../../assets/images/sass_logo.png'
import LogoStyled from '../../assets/images/styled_components_logo.png'

export const Home = () => {
  return (
    <>
        <div className='home'>

          <img className='home__pic' src={ImgProfile} alt="" />
          <div className='home__titles_box'>
            <h1 className='home__title'>Hi, I'm Jorge</h1>
            <h2 className='home__subtitle'>Front End Developer Student</h2>
              <div className='home__description_box'>
                <p className='home__description'>This is my React app for practice. I am using the following technologies:</p>
                <div className='home__description_icons_box'>
                    <img className='logos' src={LogoReact} alt="" />
                    <img className='logos' src={LogoRedux} alt="" />
                    <img className='logos' src={LogoQuery} alt="" />
                    <img className='logos' src={LogoAxios} alt="" />
                    <img className='logos' src={LogoSass} alt="" />
                    <img className='logos' src={LogoStyled} alt="" />
                </div>
              </div>
          </div>

          <BgCircles/>
        </div>          

    </>
  )
}

export default Home