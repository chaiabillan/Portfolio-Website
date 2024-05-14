import { ArrowLeft } from 'react-bootstrap-icons';

function PharmacyTechnician({ onGoBack }) {

    return (
        <section className='experience-details'>
            <button className='go-back' onClick={onGoBack}>
                < ArrowLeft className='go-back__button' />
            </button>
            <p className='experience-details__title'>
                Pharmachoice | Pharmacy Technician
            </p>
            <p className='experience-details__date'>
                June 2021 - November 2021
            </p>
            <li className='experience-details__list-item'>
                Supported pharmacy operations, dispensed medications, and managed inventory while providing exceptional customer service and adhering to regulatory guidelines
            </li>
        </section>
    )
}

export default PharmacyTechnician