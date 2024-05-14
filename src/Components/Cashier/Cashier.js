import { ArrowLeft } from 'react-bootstrap-icons';

function Cashier ({onGoBack}) {

    return (
        <section className='experience-details'>
        <button className='go-back' onClick={onGoBack}>
            < ArrowLeft className='go-back__button' />
        </button>
        <p className='experience-details__title'>
            Safeway | Cashier
        </p>
        <p className='experience-details__date'>
            April 2015 - June 2018
        </p>
        <li className='experience-details__list-item'>
            i created 
        </li>
        <li className='experience-details__list-item'>
            increased sales
        </li>
    </section>
    )
}

export default Cashier