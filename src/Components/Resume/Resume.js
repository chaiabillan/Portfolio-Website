import './Resume.scss';
import WorkExperience from '../WorkExperience/WorkExperience';
import Founder from '../Founder/Founder';
import GraphicDesigner from '../GraphicDesigner/GraphicDesigner';
import Tutor from '../Tutor/Tutor';
import RegionalCoordinator from '../RegionalCoordinator/RegionalCoordinator';
import ResearchExperience from '../ResearchExperience/ResearchExperience';
import Volunteering from '../Volunteering/Volunteering';
import Certifications from '../Certifications/Certifications';
// import { button } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Supervisor from '../Supervisor/Supervisor';
import QAAssistant from '../QAAssistant/QAAssistant';
import WavesBarista from '../WavesBarista/WavesBarista';
import StarbucksBarista from '../StarbucksBarista/StarbucksBarista';
import Cashier from '../Cashier/Cashier';
import PharmacyTechnician from '../PharmacyTechnician/PharmacyTechnician';


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

    // Go back to the WorkExperience section
    const handleGoBack = () => {
        setSelectedResource('work-experience'); 
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
                    <WorkExperience 
                        onFounderClick={() => handleResourceClick('founder')} 
                        onGraphicClick={() => handleResourceClick('graphic-designer')} 
                        onTutorClick={() => handleResourceClick('tutor')} 
                        onRegionalCoordinatorClick={() => handleResourceClick('regional-coordinator')} 
                        onSupervisorClick={() => handleResourceClick('supervisor')} 
                        onPharmacyClick={() => handleResourceClick('pharmacy')}
                        onQAClick={() => handleResourceClick('qa-assistant')}
                        onWavesClick={() => handleResourceClick('waves-barista')}
                        onStarbucksClick={() => handleResourceClick('starbucks-barista')}
                        onCashierClick={() => handleResourceClick('cashier')}
                    />
                )}
                {selectedResource === 'founder' && (
                    <Founder onGoBack={handleGoBack} />
                )}
                {selectedResource === 'graphic-designer' && (
                    <GraphicDesigner onGoBack={handleGoBack} />
                )}
                {selectedResource === 'tutor' && (
                    <Tutor onGoBack={handleGoBack} />
                )}
                {selectedResource === 'regional-coordinator' && (
                    <RegionalCoordinator onGoBack={handleGoBack} />
                )}
                {selectedResource === 'supervisor' && (
                    <Supervisor onGoBack={handleGoBack} />
                )}   
                {selectedResource === 'pharmacy' && (
                    <PharmacyTechnician onGoBack={handleGoBack} />
                )}       
                {selectedResource === 'qa-assistant' && (
                    <QAAssistant onGoBack={handleGoBack} />
                )}       
                {selectedResource === 'waves-barista' && (
                    <WavesBarista onGoBack={handleGoBack} />
                )}       
                {selectedResource === 'starbucks-barista' && (
                    <StarbucksBarista onGoBack={handleGoBack} />
                )}    
                {selectedResource === 'cashier' && (
                    <Cashier onGoBack={handleGoBack} />
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