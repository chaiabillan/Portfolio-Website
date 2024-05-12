import './About.scss';
import { Mortarboard } from 'react-bootstrap-icons';

function About () {

    return (
        <section className='about' id='about'>

            <p className='bio' id='bio'>
                Software Engineer with a background in Neuroscience.
            </p>
            <div className='education' id='education'>
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