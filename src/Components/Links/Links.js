import './Links.scss';
import { Link } from 'react-router-dom';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/LI-In-Bug.png';

function Links () {

    return (
        <section className='links'>
            <Link to='https://github.com/chaiabillan' className='links__indiv'>
                <img src={github} className='links__indiv--github' alt='github'/>
            </Link>
            <Link to='https://linkedin.com/in/chaiabillan' className='links__indiv'>
                <img src={linkedin} className='links__indiv--linkedin' alt='linkedin'/>
            </Link>
            {/* <Link to='' className='links__indiv links__indiv--resume'>
                Download <br></br> My Resume
            </Link> */}
        </section>
    )
}

export default Links