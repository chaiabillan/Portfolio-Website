import { ArrowLeft } from 'react-bootstrap-icons';

function Supervisor({ onGoBack }) {

    return (
        <section className='experience-details'>
            <button className='go-back' onClick={onGoBack}>
                < ArrowLeft className='go-back__button' />
            </button>
            <p className='experience-details__title'>
                False Creek Community Centre | Supervisor
            </p>
            <p className='experience-details__date'>
                Summer 2022
            </p>
            <li className='experience-details__list-item'>
                Posted jobs on Indeed and recruited candidates through interviews and hiring form processing
            </li>
            <li className='experience-details__list-item'>
                Managed staff schedules, overseeing several attendants each shift
            </li>
            <li className='experience-details__list-item'>
                Demonstrated strong budget management skills, successfully handling a budget of $55,000 for the summer
            </li>
            <li className='experience-details__list-item'>
                Coordinated vendors, permits, volunteers, and staff uniforms for a seamless Canada Day event execution
            </li>
        </section>
    )
}

export default Supervisor