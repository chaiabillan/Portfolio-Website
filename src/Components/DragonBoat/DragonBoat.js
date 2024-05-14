import { ArrowLeft } from 'react-bootstrap-icons';

function DragonBoat({ onGoBack }) {

    return (
        <section className='experience-details'>
            <button className='go-back' onClick={onGoBack}>
                < ArrowLeft className='go-back__button' />
            </button>
            <p className='experience-details__title'>
                Dragon Boat Festival Volunteer
            </p>
            <p className='experience-details__date'>
                Annually since 2019
            </p>
            <li className='experience-details__list-item'>
                Supervised volunteer check-in station and coordinated placements and merchandise on the day of the festival
            </li>
            <li className='experience-details__list-item'>
                increased sales
            </li>
        </section>
    )
}

export default DragonBoat