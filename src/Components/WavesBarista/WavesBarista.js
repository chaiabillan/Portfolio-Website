import { ArrowLeft } from 'react-bootstrap-icons';

function WavesBarista ({onGoBack}) {

    return (
        <section className='experience-details'>
        <button className='go-back' onClick={onGoBack}>
            < ArrowLeft />
        </button>
        <p className='experience-details__title'>
            Waves Barista
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

export default WavesBarista