import { ArrowLeft } from 'react-bootstrap-icons';

function Tutor({ onGoBack }) {

    return (
        <section className='experience-details'>
            <button className='go-back' onClick={onGoBack}>
                < ArrowLeft className='go-back__button' />
            </button>
            <p className='experience-details__title'>
                Tutor
            </p>
            <p className='experience-details__date'>
                January 2017 - Present
            </p>
            <li className='experience-details__list-item'>
                Dissected problems to present them in a more approachable manner for high school students
            </li>
            <li className='experience-details__list-item'>
                Assisted in the facilitation of various term projects including English papers and science projects
            </li>
        </section>
    )
}

export default Tutor