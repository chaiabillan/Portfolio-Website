import { ArrowLeft } from 'react-bootstrap-icons';

function GraphicDesigner({ onGoBack }) {

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
                Provided exemplary customer service, addressing customer inquiries and needs with professionalism and efficiency.
            </li>
            <li className='experience-details__list-item'>
                Played a pivotal role in the establishment's early stages, gaining valuable insights into new business development and contributing to strategic planning efforts.
            </li>
        </section>
    )
}

export default GraphicDesigner