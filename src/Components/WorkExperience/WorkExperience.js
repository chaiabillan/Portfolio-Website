import './WorkExperience.scss';
import { useState, useRef, useEffect } from 'react';

function WorkExperience({ experiences }) {

    const [selectedExperience] = useState(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        if (selectedExperience !== null && experienceRef.current) {
            experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedExperience]);

    return (
        <section className='work-experience selected'  ref={experienceRef}>
            {experiences.map((experience, index) => (
                <button key={index} className={`experience ${experience.className}`} onClick={experience.onClick}>
                    <p className='experience__company'>{experience.company}</p>
                    <p className='experience__role'>{experience.role}</p>
                    <p className='experience__date'>{experience.date}</p>
                </button>
            ))}
        </section>
    )
}

export default WorkExperience