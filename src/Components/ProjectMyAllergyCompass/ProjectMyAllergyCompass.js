import logo from '../../assets/images/Designer.png';
import { Link } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';

function ProjectMyAllergyCompass() {

    return (
        <section className="project">
            <div className='project__top'>
                <p className='project__top--title'>
                    My Allergy Compass
                </p>
                <Link to ='#'>
                    < Github  className='project__top--github'/>
                </Link>
            </div>
            <div className='project__middle'>
                <img src={logo} className='project__image' alt='cookies logo' />
                <div>
                    <ul className='project__details'>
                        <li>
                            createda laskjf;akfj;laksjf;a
                        </li>
                        <li>
                            a;flkajh;fhahfl;aklfjaweoifj;;
                        </li>
                        <li>
                            aoiutopewauhfjka.,czn;oawi
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