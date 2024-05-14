import logo from '../../assets/images/Designer.png';
import { Link } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';

function ProjectCookies() {

    return (
        <section className="project selected">
            <div className='project__top'>
                <p className='project__top--title'>
                    Chaia's Cookies
                </p>
                <Link to='#'>
                    < Github className='project__top--github' />
                </Link>
            </div>
            <div className='project__middle'>
                <img src={logo} className='project__image' alt='cookies logo' />
                <div>
                    <ul className='project__details'>
                        <li className='project__details--item'>
                            <strong>E-commerce Excellence: </strong> Spearheaded the development of an e-commerce platform, "Chaia's Cookies," employing React, HTML, Sass, and Bootstrap for frontend finesse, while integrating Express, MySQL, and APIs for backend robustness. Implemented user-centric features such as account creation, secure checkout, order tracking, and email notifications, ensuring a seamless shopping experience and efficient business operations.
                        </li>
                        <li className='project__details--item'>
                        <strong>Project Leadership and Deployment: </strong> Directed the project lifecycle of "Chaia's Cookies" from ideation to deployment, utilizing GitHub for version control and collaborative development, and deploying the application on Heroku for streamlined accessibility. Employed JavaScript for dynamic client-side interactions and server-side processing, ensuring scalability, maintainability, and optimal performance in alignment with industry standards and user expectations.
                        </li>
                    </ul>
                </div>
            </div>
            <Link to='https://chaiascookies.com/' className='project__link'>
                www.chaiascookies.com
            </Link>
        </section>
    )
}

export default ProjectCookies