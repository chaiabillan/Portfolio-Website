import logo from '../../assets/images/Designer.png';
import { Link } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';

function ProjectBandSite() {

    return (
        <section className="project selected">
            <div className='project__top'>
                <p className='project__top--title'>
                    Band Site
                </p>
                <Link to='https://github.com/chaiabillan/chaia-billan-bandsite'>
                    < Github className='project__top--github' />
                </Link>
            </div>
            <div className='project__middle'>
                <img src={logo} className='project__image' alt='cookies logo' />
                <div>
                    <ul className='project__details'>
                        <li className='project__details--item'>
                            <strong>Front-end Development Proficiency: </strong> Established a solid foundation in front-end development through the creation of a responsive website for an emerging band, employing Sass for styling consistency, Flexbox for layout control, and JavaScript for interactive elements, effectively capturing the band's essence and engaging their audience.
                        </li>
                        <li className='project__details--item'>
                            <strong>API Integration Expertise: </strong> Demonstrated adeptness in API integration within the 'Band Site' project, seamlessly incorporating live data retrieval from a server using Axios, enabling dynamic content updates such as comments and show data, and implementing additional features like comment likes and deletion, enhancing user interactivity and engagement.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProjectBandSite