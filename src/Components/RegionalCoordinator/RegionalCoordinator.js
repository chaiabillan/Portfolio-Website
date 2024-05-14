import { ArrowLeft } from 'react-bootstrap-icons';

function RegionalCoordinator({ onGoBack }) {

    return (
        <section className='experience-details'>
            <button className='go-back' onClick={onGoBack}>
                < ArrowLeft className='go-back__button' />
            </button>
            <p className='experience-details__title'>
                Regional Coordinator
            </p>
            <p className='experience-details__date'>
                Summer 2022
            </p>
            <li className='experience-details__list-item'>
                Offered onsite support and conducted staff evaluations for over 6 camp locations in the lower mainland
            </li>
            <li className='experience-details__list-item'>
                Efficiently organized and delivered equipment to sites on a weekly basis, ensuring smooth camp operations
            </li>
            <li className='experience-details__list-item'>
                Acted as a proactive liaison between onsite supervisors and out-of-province head office managers
            </li>
            <p className='experience-details__title experience-details__title--second'>
                Camp Supervisor
            </p>
            <p className='experience-details__date'>
                Summer 2021
            </p>
            <li className='experience-details__list-item'>
                Oversaw onsite camp programming and evaluated camp counsellors in soccer skill program delivery
            </li>
            <li className='experience-details__list-item'>
                Supervised children (aged 5-13) with diverse needs and liaised with parents and the regional coordinator
            </li>
            <li className='experience-details__list-item'>
                Completed all administrative documentation pertaining to adherence to safety regulations and guidelines
            </li>
        </section>
    )
}

export default RegionalCoordinator