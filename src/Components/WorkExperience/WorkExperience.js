import './WorkExperience.scss';
import { useState, useRef, useEffect } from 'react';

function WorkExperience({ experiences, showAllExperiences, setShowAllExperiences }) {
    // const [showAllExperiences, setShowAllExperiences] = useState(false);
    const [selectedExperience] = useState(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        if (selectedExperience !== null && experienceRef.current) {
            experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedExperience]);

    const renderExperiences = () => {
        if (showAllExperiences) {
            return experiences.map((experience, index) => (
                <button key={index} className={`experience ${experience.className}`} onClick={experience.onClick}>
                    <p className='experience__company'>{experience.company}</p>
                    <p className='experience__role'>{experience.role}</p>
                    <p className='experience__date'>{experience.date}</p>
                </button>
            ));
        } else {
            // Only show the first four experiences
            return experiences.slice(0, 4).map((experience, index) => (
                <button key={index} className={`experience ${experience.className}`} onClick={experience.onClick}>
                    <p className='experience__company'>{experience.company}</p>
                    <p className='experience__role'>{experience.role}</p>
                    <p className='experience__date'>{experience.date}</p>
                </button>
            ));
        }
    };

    const handleSeeMore = () => {
        setShowAllExperiences(true);
    };

    return (
        <section className='work-experience selected' ref={experienceRef}>
            {renderExperiences()}
            {!showAllExperiences && (
                
                <button className="see-more-button" onClick={handleSeeMore}>
                    See More
                </button>
            )}
        </section>
    );
}

export default WorkExperience