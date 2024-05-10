import './Hero.scss';
import { GeoAltFill } from 'react-bootstrap-icons';
import Chaia from '../../assets/images/Code-To-Career---January-2024_0014_Chaia-Billan.jpg'


function Hero () {

    return (
        <section className='hero'>
            <section className='introduction'>
                <div className='introduction__left'>
                    <p className='introduction__left--name'>
                        Hi, I'm Chaia!
                    </p>
                    <p className='introduction__left--info introduction__left--info--job'>
                        Software Engineer
                    </p>
                    <p className='introduction__left--info'>
                        <GeoAltFill className='introduction__left--info--icon'/>
                        Vancouver, BC
                    </p>
                    <a href='mailto: chaia_billan@yahoo.com'className='introduction__left--info'>
                        chaia_billan@yahoo.com
                    </a>
                </div>
                    <img className='introduction__right' src={Chaia} alt='Chaia'/>
            </section>
        </section>
    )
}

export default Hero