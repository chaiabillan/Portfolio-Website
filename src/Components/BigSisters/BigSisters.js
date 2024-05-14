import { ArrowLeft } from 'react-bootstrap-icons';

function BigSisters({ onGoBack }) {

    return (
        <section className='experience-details'>
            <button className='go-back' onClick={onGoBack}>
                < ArrowLeft className='go-back__button' />
            </button>
            <p className='experience-details__title'>
                Big Sisters
            </p>
            <p className='experience-details__date'>
                January 2020 - Present
            </p>
            <li className='experience-details__list-item'>
                Mentored groups of up to ten young girls in weekly meetings, providing a positive adult role model and encouraging youth empowerment through life skills instruction and confidence-building lessons
            </li>
        </section>
    )
}

export default BigSisters