import './Resume.scss';
import WorkExperience from '../WorkExperience/WorkExperience';
import Founder from '../Founder/Founder';
import ResearchExperience from '../ResearchExperience/ResearchExperience';
import Volunteering from '../Volunteering/Volunteering';
import Certifications from '../Certifications/Certifications';
import { button } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';


function Resume() {
    const [selectedResource, setSelectedResource] = useState(null);
    const resumeRef = useRef(null);

    useEffect(() => {
        if (selectedResource !== null) {
            resumeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedResource]);

    const handleResourceClick = (resource) => {
        setSelectedResource(resource);
    }

    const handleGoBack = () => {
        setSelectedResource('work-experience'); // Go back to the WorkExperience section
    };

    return (
        <section className='resume' ref={resumeRef}>
            <p className='resume__title'>
                Resume
            </p>
            <section className='resume__options'>
                <button onClick={() => handleResourceClick('work-experience')} className={`resume__options--indiv ${selectedResource === 'work-experience' ? 'selected' : ''}`}>
                    Work Experience
                </button>
                <button onClick={() => handleResourceClick('research-experience')} className={`resume__options--indiv ${selectedResource === 'research-experience' ? 'selected' : ''}`}>
                    Research Experience
                </button>
                <button onClick={() => handleResourceClick('volunteering')} className={`resume__options--indiv ${selectedResource === 'volunteering' ? 'selected' : ''}`}>
                    Volunteering
                </button>
                <button onClick={() => handleResourceClick('certifications')} className={`resume__options--indiv ${selectedResource === 'certifications' ? 'selected' : ''}`}>
                    Certifications
                </button>
            </section>
            <section>

                {selectedResource === 'work-experience' && (
                    <WorkExperience onFounderClick={() => handleResourceClick('founder')} />
                )}
                {selectedResource === 'founder' && (
                    <Founder onGoBack={handleGoBack} />
                )}

                {selectedResource === 'research-experience' && (
                    <ResearchExperience />
                )}
                {selectedResource === 'volunteering' && (
                    <Volunteering />
                )}
                {selectedResource === 'certifications' && (
                    <Certifications />
                )}
            </section>
        </section>
    )
}

export default Resume