// import './Founder.scss';
// import '../../styles/partials/global.scss'

import React from 'react';
import { ArrowLeft } from 'react-bootstrap-icons';

function Founder({onGoBack}) {

    return (
        <>
            <section className='experience-details'>
                <button className='go-back' onClick={onGoBack}>
                    < ArrowLeft />
                </button>
                <p className='experience-details__title'>
                    Chaia's chocolate chip cookies - Founder - Est. April 2024
                </p>

                <li className='experience-details__list-item'>
                    i created this business
                </li>
                <li className='experience-details__list-item'>
                    Donated $X to BC Cancer Foundation and
                </li>
            </section>
        </>
    )
}

export default Founder