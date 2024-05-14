import logo from '../../assets/images/Designer.png';
import { Link } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';


function ProjectInStock() {

    return (
        <section className="project selected">
            <div className='project__top'>
                <p className='project__top--title'>
                    In stock
                </p>
                <Link to='https://github.com/biyunzhu/instock-client'>
                    < Github className='project__top--github' />
                </Link>
            </div>
            <div className='project__middle'>
                <img src={logo} className='project__image' alt='cookies logo' />
                <div>
                    <ul className='project__details'>
                        <li className='project__details--item'>
                            <strong>Collaborative Agile Practices: </strong> Played a pivotal role in the collaborative development of 'InStock,' an inventory management system, by embracing Agile methodologies, Git Flow, and Scrum practices, fostering effective communication and teamwork within the project group to ensure the timely delivery of a scalable solution.
                        </li>
                        <li className='project__details--item'>
                            <strong>Teamwork Excellence: </strong> Demonstrated strong collaborative skills within the 'InStock' team, actively participating in task planning sessions, utilizing Jira Scrum boards for task management, engaging in daily stand-ups, and upholding rigorous standards in Git Flow, code review, and pull request processes, contributing to the project's successful completion on schedule.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProjectInStock