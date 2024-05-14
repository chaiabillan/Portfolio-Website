import { ArrowLeft } from 'react-bootstrap-icons';

function FamilyPlace({ onGoBack }) {

    return (
        <section className='experience-details'>
            <button className='go-back' onClick={onGoBack}>
                < ArrowLeft className='go-back__button' />
            </button>
            <p className='experience-details__title'>
                Playroom Assistant | New Westminster Family Place
            </p>
            <p className='experience-details__date'>
                January 2017 - December 2019
            </p>
            <li className='experience-details__list-item'>
                Entertained and ensured the safety of several small children while their parents attended workshops
            </li>
        </section>
    )
}

export default FamilyPlace