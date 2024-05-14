import logo from '../../assets/images/Designer.png';
import { Link } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';

function ProjectMyAllergyCompass() {

    return (
        <section className="project selected">
            <div className='project__top'>
                <p className='project__top--title'>
                    My Allergy Compass
                </p>
                <Link to='https://github.com/chaiabillan/chaia-billan-capstone-client'>
                    < Github className='project__top--github' />
                </Link>
            </div>
            <div className='project__middle'>
                <img src={logo} className='project__image' alt='cookies logo' />
                <div>
                    <ul className='project__details'>
                        <li className='project__details--item'>
                            <strong>Full-Stack Mastery: </strong> Showcased advanced proficiency in full-stack development through the realization of "My Allergy Compass," leveraging React, Express, and MySQL to construct diverse features including a community forum, emergency phone lookup, and a comprehensive travel guide, all while meticulously adhering to industry-standard practices in code structuring and seamless API integration.
                        </li>
                        <li className='project__details--item'>
                            <strong>Project Management Evolution: </strong> Orchestrated the development of "My Allergy Compass," a solo capstone project, by adeptly implementing Agile methodologies for task organization, sprint planning, and efficient time management, culminating in the creation of a robust travel application tailored for individuals with food allergies.
                        </li>
                    </ul>
                </div>
            </div>
            <Link to='https://myallergycompass.netlify.app/' className='project__link'>
                myallergycompass.netlify.app
            </Link>
        </section>
    )
}


export default ProjectMyAllergyCompass