import './About.scss';
import { Mortarboard } from 'react-bootstrap-icons';

function About () {

    return (
        <section className='about' id='about'>

            <p className='bio' id='bio'>
                Hey there! I'm Chaia Billan, a recent graduate seeking a software engineering 
                internship. My journey 
                has been a rich tapestry of experiences, from leading teams and solving complex 
                problems to exploring the realms of graphic design. However, what truly lights 
                up my world is the creative canvas of web design, where I can blend my love for
                 aesthetics with intuitive user experiences. It's this passion that propels me 
                 towards software engineering, recognizing the immense potential to leverage my 
                 diverse skill set in an increasingly digital world. With a foundation in neuroscience
                  and psychology, I bring a unique perspective to my work, constantly striving to 
                  craft web experiences that resonate on a deeper cognitive level. Let's create 
                  something extraordinary together.
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