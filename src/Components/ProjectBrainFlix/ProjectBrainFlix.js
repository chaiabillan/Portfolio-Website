import logo from '../../assets/images/Designer.png';
import { Link } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';

function ProjectBrainFlix() {

    return (
        <section className="project selected">
            <div className='project__top'>
                <p className='project__top--title'>
                    Brain Flix
                </p>
                <Link to='https://github.com/chaiabillan/chaia-billan-brainflix'>
                    < Github className='project__top--github' />
                </Link>
            </div>
            <div className='project__middle'>
                <img src={logo} className='project__image' alt='cookies logo' />
                <div>
                    <ul className='project__details'>
                        <li className='project__details--item'>
                            <strong>Advanced React Proficiency: </strong> Exhibited advanced competency in React development with the creation of 'BrainFlix,' a prototype video streaming platform, demonstrating adeptness in utilizing create-react-app, functional components, and react-router-dom to construct a dynamic and responsive user interface across multiple sprints.
                        </li>
                        <li className='project__details--item'>
                            <strong>Front-end Design Finesse: </strong> Illustrated strong front-end design skills in 'BrainFlix' by crafting visually captivating interfaces that closely mirrored provided mockups, employing SASS for styling consistency, Flexbox for layout flexibility, and implementing dynamic content rendering based on user interactions and API data.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProjectBrainFlix