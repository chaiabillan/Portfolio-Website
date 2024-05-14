import { ArrowLeft } from 'react-bootstrap-icons';

function QAAssistant({ onGoBack }) {

    return (
        <section className='experience-details'>
            <button className='go-back' onClick={onGoBack}>
                < ArrowLeft className='go-back__button' />
            </button>
            <p className='experience-details__title'>
                Response Biomedical Corporation | Quality Assurance Assistant
            </p>
            <p className='experience-details__date'>
                May - December 2019
            </p>
            <li className='experience-details__list-item'>
                Spearheaded quality improvement initiatives, mitigating medical equipment deterioration during shipping and identifying manufacturing errors that contributed to faulty devices
            </li>
            <li className='experience-details__list-item'>
                Demonstrated strong adherence to protocols through meticulous inspection and comprehensive quality checks on incoming equipment
            </li>
        </section>
    )
}

export default QAAssistant