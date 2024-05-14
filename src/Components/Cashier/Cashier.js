import { ArrowLeft } from 'react-bootstrap-icons';

function Cashier({ onGoBack }) {

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
                Provided exceptional customer service by efficiently processing transactions, handling cash, and resolving inquiries, resulting in consistently positive feedback from customers and management alike.
            </li>
        </section>
    )
}

export default Cashier