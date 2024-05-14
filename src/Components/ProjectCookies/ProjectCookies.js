import { Link } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';
import website from '../../assets/images/chaiascookieswebsite.png';

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
                <Link to='https://chaiascookies.com/'><img src={website} className='project__image' alt='cookies logo' /></Link>
                <div>
                    <ul className='project__details'>
                        <li className='project__details--item'>
                            <strong>Project Leadership and Deployment: </strong> Directed the project lifecycle of "Chaia's Cookies" from ideation to deployment, utilizing GitHub for version control, and currently deploying the application on Heroku for streamlined accessibility. Employed JavaScript for dynamic client-side interactions and server-side processing, ensuring scalability, maintainability, and optimal performance in alignment with industry standards and user expectations.
                        </li>
                        <li className='project__details--item'>
                            <strong>E-commerce Excellence: </strong> Spearheaded the development of an e-commerce platform, "Chaia's Cookies," employing React, HTML, Sass, and Bootstrap for frontend, while integrating Express, MySQL, and APIs for backend robustness. Currently implementing user-centric features such as account creation, secure checkout, order tracking, and email notifications, ensuring a seamless shopping experience and efficient business operations.
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