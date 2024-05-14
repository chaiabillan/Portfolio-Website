import { ArrowLeft } from 'react-bootstrap-icons';

function ArtProject({ onGoBack }) {

    return (
        <section className='experience-details'>
            <button className='go-back' onClick={onGoBack}>
                < ArrowLeft className='go-back__button' />
            </button>
            <p className='experience-details__title'>
                Art Project
            </p>
            <p className='experience-details__date'>
                Est. January 2022
            </p>
            <li className='experience-details__list-item'>
                Collaborated with the city of New Westminster Art Council to create art projects that commemorate historic landmarks with the help of community members
            </li>
        </section>
    )
}

export default ArtProject