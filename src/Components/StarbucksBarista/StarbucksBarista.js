import { ArrowLeft } from 'react-bootstrap-icons';

function StarbucksBarista({ onGoBack }) {

    return (
        <section className='experience-details'>
            <button className='go-back' onClick={onGoBack}>
                < ArrowLeft className='go-back__button' />
            </button>
            <p className='experience-details__title'>
                Starbucks | Barista
            </p>
            <p className='experience-details__date'>
                May - September 2018
            </p>
            <li className='experience-details__list-item'>
                Prepared and served a diverse range of beverages and food with a focus on providing outstanding customer service
            </li>
        </section>
    )
}

export default StarbucksBarista