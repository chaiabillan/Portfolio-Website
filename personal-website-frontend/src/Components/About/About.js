import './About.scss';
import { Mortarboard, GeoAltFill } from 'react-bootstrap-icons';
import Chaia from '../../assets/images/Code-To-Career---January-2024_0014_Chaia-Billan.jpg'

function About () {

    return (
        <section className='about'>
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
                        {/* <p>   </p> */}
                        Vancouver, BC
                    </p>
                    <p className='introduction__left--info'>
                        chaia_billan@yahoo.com
                    </p>
                </div>
                    <img className='introduction__right' src={Chaia} alt='Chaia'/>
            </section>
            <p className='bio'>
                Software Engineer with a background in Neuroscience.
            </p>
            <div className='education'>
                <Mortarboard className='education__icon'/>
                <p className='education__title'>
                    Software Engineering Diploma
                </p>
                <p className='education__info'>
                    BrainStation
                </p>
                <p className='education__info'>
                    January 2024 - April 2024
                </p>
            </div>
            <div className='education'>
                <Mortarboard className='education__icon'/>
                <p className='education__title'>
                    B.Sc. Behavioural Neuroscience
                </p>
                <p className='education__info'>
                    University of British Columbia
                </p>
                <p className='education__info'>
                    September 2018 - December 2022
                </p>
            </div>
        </section>
    )
}

export default About