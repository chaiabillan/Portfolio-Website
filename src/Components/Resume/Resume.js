import './Resume.scss';
import WorkExperience from '../WorkExperience/WorkExperience';
import Founder from '../Founder/Founder';
import GraphicDesigner from '../GraphicDesigner/GraphicDesigner';
import Tutor from '../Tutor/Tutor';
import RegionalCoordinator from '../RegionalCoordinator/RegionalCoordinator';
import ResearchExperience from '../ResearchExperience/ResearchExperience';
import Volunteering from '../Volunteering/Volunteering';
import Certifications from '../Certifications/Certifications';
import { useState, useRef, useEffect } from 'react';
import Supervisor from '../Supervisor/Supervisor';
import QAAssistant from '../QAAssistant/QAAssistant';
import WavesBarista from '../WavesBarista/WavesBarista';
import StarbucksBarista from '../StarbucksBarista/StarbucksBarista';
import Cashier from '../Cashier/Cashier';
import PharmacyTechnician from '../PharmacyTechnician/PharmacyTechnician';
import BigSisters from '../BigSisters/BigSisters';
import DragonBoat from '../DragonBoat/DragonBoat';
import ArtProject from '../ArtProject/ArtProject';
import FamilyPlace from '../FamilyPlace/FamilyPlace';


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

    const handleVolunteerGoBack = () => {
        setSelectedResource('volunteering');
    };


    const experiences = [
        {
            company: "Chaia's chocolate chip cookies",
            role: "Founder",
            date: "March 2024 - Present",
            className: "cookies",
            onClick: () => handleResourceClick('founder'),
        },
        {
            company: "Emilio Finatti Pizzeria",
            role: "Graphic Designer | Front of House",
            date: "August 2023 - Present",
            className: "graphic-design",
            onClick: () => handleResourceClick('graphic-designer'),
        },
        {
            company: "Freelance",
            role: "Tutor",
            date: "September 2017 - Present",
            className: "tutoring",
            onClick: () => handleResourceClick('tutor'),
        },
        {
            company: "Royal City Soccer Club",
            role: "Regional Coordinator",
            date: "June 2021 - September 2022",
            className: "soccer",
            onClick: () => handleResourceClick('regional-coordinator'),
        },
        {
            company: "False Creek Community Centre",
            role: "Supervisor",
            date: "Summer 2022",
            className: "waterpark",
            onClick: () => handleResourceClick('supervisor'),
        },
        {
            company: "Pharmachoice",
            role: "Pharmacy Technician",
            date: "Est. 2024",
            className: "pharmacy",
            onClick: () => handleResourceClick('pharmacy'),
        },
        {
            company: "Response Biomedical Corporation",
            role: "Quality Assurance Assistant",
            date: "May 2019 - December 2019",
            className: "bio-lab",
            onClick: () => handleResourceClick('qa-assistant'),
        },
        {
            company: "Waves Coffee House",
            role: "Barista",
            date: "June 2019 - December 2019",
            className: "barista",
            onClick: () => handleResourceClick('waves-barista'),
        },
        {
            company: "Starbucks",
            role: "Barista",
            date: "April 2018 - September 2019",
            className: "barista",
            onClick: () => handleResourceClick('starbucks-barista'),
        },
        {
            company: "Safeway",
            role: "Cashier",
            date: "April 2015 - June 2018",
            className: "grocery-store",
            onClick: () => handleResourceClick('cashier'),
        }
    ];

    const volunteerExperience = [
        {
            company: "Big Sisters of Canada",
            role: "Mentor",
            date: "January 2020 - Present",
            className: "big-sisters",
            onClick: () => handleResourceClick('big-sisters'),
        },
        {
            company: "Annual Dragon Boat Festival",
            role: "Volunteer Team Lead",
            date: "Annually since 2019",
            className: "dragon-boat",
            onClick: () => handleResourceClick('dragon-boat'),
        },
        {
            company: "New West Community Art Project",
            role: "Co-Founder",
            date: "January - December 2022",
            className: "community-art",
            onClick: () => handleResourceClick('community-art'),
        },
        {
            company: "Family Place",
            role: "Playroom Assistant",
            date: "2017-2019",
            className: "family-place",
            onClick: () => handleResourceClick('family-place'),
        }
    ];



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
                    <WorkExperience experiences={experiences} />
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
                    <ResearchExperience
                    />
                )}



                {selectedResource === 'volunteering' && (
                    <Volunteering volunteerExperience={volunteerExperience}/>
                )}

                    {selectedResource === 'big-sisters' && (
                        <BigSisters onGoBack={handleVolunteerGoBack}/>
                    )}
                    {selectedResource === 'dragon-boat' && (
                        <DragonBoat onGoBack={handleVolunteerGoBack}/>
                    )}
                    {selectedResource === 'community-art' && (
                        <ArtProject onGoBack={handleVolunteerGoBack}/>
                    )}
                    {selectedResource === 'family-place' && (
                        <FamilyPlace onGoBack={handleVolunteerGoBack}/>
                    )}

                {selectedResource === 'certifications' && (
                    <Certifications />
                )}
            </section>
        </section>
    )
}

export default Resume