import { ArrowLeft } from 'react-bootstrap-icons';

function GraphicDesigner ({onGoBack}) {

    return (
        <section className='experience-details'>
        <button className='go-back' onClick={onGoBack}>
            < ArrowLeft className='go-back__button' />
        </button>
        <p className='experience-details__title'>
            Emilio Finatti Pizzeria
        </p>
        <p className='experience-details__title'>
            Graphic Designer | Front of House | Delivery Driver
        </p>
        <p className='experience-details__date'>
            August 2023 - Present
        </p>
        <li className='experience-details__list-item'>
            Created advertisement material that boosted sales by 14%
        </li>
        <li className='experience-details__list-item'>
            Assisted customers with all their needs
        </li>
        <li className='experience-details__list-item'>
            Gained a profound sense of what its like to start a new business - as i worked with them since they opened up
        </li>
    </section>
    )
}

export default GraphicDesigner