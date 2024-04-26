import './WorkExperience.scss';
import { Link } from 'react-router-dom';
import Founder from '../Founder/Founder';
import { useState, useRef, useEffect } from 'react';

function WorkExperience({onFounderClick}) {

    const [selectedExperience, setSelectedExperience] = useState(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        if (selectedExperience !== null && experienceRef.current) {
            experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedExperience]);

    // Conditional rendering based on the selectedExperience state
    if (selectedExperience === 'Founder') {
        return <Founder />;
    }

    return (
        <section className='work-experience selected' ref={experienceRef}>
            <button onClick={onFounderClick} className='experience cookies'>
                <p className='experience__company'>
                    Chaia's chocolate chip cookies
                </p>
                <p className='experience__role'>
                    Founder
                </p>
                <p className='experience__date'>
                    March 2024 - Present
                </p>
            </button>
            <Link to='#' className='experience'>
                <p className='experience__company'>
                    Emilio Finatti Pizzeria
                </p>
                <p className='experience__role'>
                    Graphic Designer | Front of House
                </p>
                <p className='experience__date'>
                    August 2023 - Present
                </p>
            </Link>
            <Link to='#' className='experience'>
                <p className='experience__company'>
                    Freelance
                </p>
                <p className='experience__role'>
                    Tutor
                </p>
                <p className='experience__date'>
                    September 2017 - Present
                </p>
            </Link>
            <Link to='#' className='experience'>
                <p className='experience__company'>
                    Royal City Soccer Club 
                </p>
                <p className='experience__role'>
                    Regional Coordinator 
                </p>
                <p className='experience__date'>
                    June 2021 - September 2022
                </p>
            </Link>
            <Link to='#' className='experience'>
                <p className='experience__company'>
                    Pharmachoice
                </p>
                <p className='experience__role'>
                    Pharmacy Technician 
                </p>
                <p className='experience__date'>
                    Est. 2024
                </p>
            </Link>
            <Link to='#' className='experience'>
                <p className='experience__company'>
                    Chaia's chocolate chip cookies
                </p>
                <p className='experience__role'>
                    Founder
                </p>
                <p className='experience__date'>
                    Est. 2024
                </p>
            </Link>
            <Link to='#' className='experience'>
                <p className='experience__company'>
                    Chaia's chocolate chip cookies
                </p>
                <p className='experience__role'>
                    Founder
                </p>
                <p className='experience__date'>
                    Est. 2024
                </p>
            </Link>
        </section>

    )
}

export default WorkExperience