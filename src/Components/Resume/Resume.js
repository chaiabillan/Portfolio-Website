import './Resume.scss';
import WorkExperience from '../WorkExperience/WorkExperience';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Resume() {
    const [selectedResource, setSelectedResource] = useState(null);

    const handleResourceClick = (resource) => {
        setSelectedResource(resource);
    }

    return (
        <section className='resume'>
            <p className='resume__title'>
                Resume
            </p>
            <section className='resume__options'>
                <Link onClick={() => handleResourceClick('work-experience')} className={`resume__options--indiv ${selectedResource === 'work-experience' ? 'selected' : ''}`}>
                        Work Experience
                </Link>
                <Link  onClick={() => handleResourceClick('research-experience')} className={`resume__options--indiv ${selectedResource === 'research-experience' ? 'selected' : ''}`}>
                        Research Experience
                </Link>
                <Link  onClick={() => handleResourceClick('volunteering')} className={`resume__options--indiv ${selectedResource === 'volunteering' ? 'selected' : ''}`}>
                        Volunteering
                </Link>
                <Link  onClick={() => handleResourceClick('certifications')} className={`resume__options--indiv ${selectedResource === 'certifications' ? 'selected' : ''}`}>
                        Certifications
                </Link>
            </section>
            <section>
            {selectedResource === 'work-experience' && (
                <WorkExperience />
            )}
            </section>

        </section>
    )
}

export default Resume