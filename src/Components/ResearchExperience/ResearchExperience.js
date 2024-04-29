import './ResearchExperience.scss';
import brain from '../../assets/images/brain.svg';

function ResearchExperience() {

    return (
        <section className='research'>
            <img src={brain} className='research__icon' />
            <p className='research__lab'>
                Perception-Action Lab @ UBC
            </p>
            <p className='research__title'>
                Research Assistant
            </p>
            <p className='research__date'>
                October 2021 - December 2022
            </p>
            <p className='research__duties research__duties--top'>
                Supported a research project on quantifying sub-concussive exposure resulting from headers for UBC women's varsity soccer team, assisting with data collection, analysis, and presentation
            </p>
            <p className='research__duties'>
                Demonstrated attention to detail while thoroughly reviewing video footage of games and practices, meticulously documenting every head impact, including ball delivery specifics and impact locations
            </p>

            <img src={brain} className='research__icon' />
            <p className='research__lab'>
                Motivated Cognition Lab @ UBC
            </p>
            <p className='research__title'>
                Research Assistant
            </p>
            <p className='research__date'>
                May 2021 - December 2022
            </p>
            <p className='research__duties research__duties--top'>
            Contributed to a research project investigating the neural systems underlying active and inhibitory avoidance behaviors in individuals with anxiety and depression
            </p>
            <p className='research__duties'>
            Showcased resourcefulness by independently learning Javascript through online courses and applying this knowledge to rectify logic and syntax errors in the programming for an online psychology study
            </p>
        </section>
    )
}

export default ResearchExperience