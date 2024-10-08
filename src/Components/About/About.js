import './About.scss';
import { Mortarboard } from 'react-bootstrap-icons';

function About () {

    return (
        <section className='about' id='about'>

            <p className='bio' id='bio'>
            Hey there! I’m Chaia Billan. My journey has been a rich tapestry of experiences, from leading teams and solving complex problems to exploring the fascinating worlds of neuroscience research and software engineering. What truly lights up my world is blending creativity with science—whether through intuitive web design or investigating the brain’s mysteries. With a foundation in neuroscience and psychology, I bring a unique perspective to both my research and tech work, constantly striving to craft solutions that resonate on a deeper cognitive level. Let’s create something extraordinary together!
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