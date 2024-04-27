import { ArrowLeft } from 'react-bootstrap-icons';

function Supervisor ({onGoBack}) {

    return (
        <section className='experience-details'>
        <button className='go-back' onClick={onGoBack}>
            < ArrowLeft />
        </button>
        <p className='experience-details__title'>
            Supervisor
        </p>

        <li className='experience-details__list-item'>
            i managed 
        </li>
        <li className='experience-details__list-item'>
            increased sales
        </li>
    </section>
    )
}

export default Supervisor