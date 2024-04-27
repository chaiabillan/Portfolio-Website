import './WorkExperience.scss';
// import { button } from 'react-router-dom';
import Founder from '../Founder/Founder';
import { useState, useRef, useEffect } from 'react';
import GraphicDesigner from '../GraphicDesigner/GraphicDesigner';
import Tutor from '../Tutor/Tutor';
import RegionalCoordinator from '../RegionalCoordinator/RegionalCoordinator';
import Supervisor from '../Supervisor/Supervisor';
import PharmacyTechnician from '../PharmacyTechnician/PharmacyTechnician';
import QAAssistant from '../QAAssistant/QAAssistant';
import WavesBarista from '../WavesBarista/WavesBarista';
import StarbucksBarista from '../StarbucksBarista/StarbucksBarista';
import Cashier from '../Cashier/Cashier';

function WorkExperience({onFounderClick, onGraphicClick, onTutorClick, onRegionalCoordinatorClick, onSupervisorClick, onPharmacyClick, onQAClick, onWavesClick, onStarbucksClick, onCashierClick}) {

    const [selectedExperience] = useState(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        if (selectedExperience !== null && experienceRef.current) {
            experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedExperience]);

    // Conditional rendering based on the selectedExperience state
    if (selectedExperience === 'Founder') {
        return <Founder />;
    } else if (selectedExperience === 'Graphic Designer') {
        return <GraphicDesigner />
    } else if (selectedExperience === 'Tutor') {
        return <Tutor />
    } else if (selectedExperience === 'Regional Coordinator') {
        return <RegionalCoordinator />
    } else if (selectedExperience === 'Supervisor') {
        return <Supervisor />
    } else if (selectedExperience === 'Pharmacy Technician') {
        return <PharmacyTechnician />
    } else if (selectedExperience === 'Supervisor') {
        return <QAAssistant />
    } else if (selectedExperience === 'Supervisor') {
        return <WavesBarista />
    } else if (selectedExperience === 'Supervisor') {
        return <StarbucksBarista />
    } else if (selectedExperience === 'Supervisor') {
        return <Cashier />
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
            <button onClick={onGraphicClick} className='experience'>
                <p className='experience__company'>
                    Emilio Finatti Pizzeria
                </p>
                <p className='experience__role'>
                    Graphic Designer | Front of House
                </p>
                <p className='experience__date'>
                    August 2023 - Present
                </p>
            </button>
            <button onClick={onTutorClick}  className='experience'>
                <p className='experience__company'>
                    Freelance
                </p>
                <p className='experience__role'>
                    Tutor
                </p>
                <p className='experience__date'>
                    September 2017 - Present
                </p>
            </button>
            <button onClick={onRegionalCoordinatorClick} className='experience'>
                <p className='experience__company'>
                    Royal City Soccer Club 
                </p>
                <p className='experience__role'>
                    Regional Coordinator 
                </p>
                <p className='experience__date'>
                    June 2021 - September 2022
                </p>
            </button>
            <button onClick={onSupervisorClick} className='experience'>
                <p className='experience__company'>
                    False Creek Community Centre
                </p>
                <p className='experience__role'>
                    Supervisor
                </p>
                <p className='experience__date'>
                    Summer 2022
                </p>
            </button>
            <button onClick={onPharmacyClick} className='experience'>
                <p className='experience__company'>
                    Pharmachoice
                </p>
                <p className='experience__role'>
                    Pharmacy Technician 
                </p>
                <p className='experience__date'>
                    Est. 2024
                </p>
            </button>
            <button onClick={onQAClick} className='experience'>
                <p className='experience__company'>
                    Response Biomedical Corporation
                </p>
                <p className='experience__role'>
                    Quality Assurance Assistant 
                </p>
                <p className='experience__date'>
                    May 2019 - December 2019
                </p>
            </button>
            <button onClick={onWavesClick} className='experience'>
                <p className='experience__company'>
                    Waves Coffee House
                </p>
                <p className='experience__role'>
                    Barista
                </p>
                <p className='experience__date'>
                    June 2019 - December 2019
                </p>
            </button>
            <button onClick={onStarbucksClick} className='experience'>
                <p className='experience__company'>
                    Starbucks
                </p>
                <p className='experience__role'>
                    Barista
                </p>
                <p className='experience__date'>
                    April 2018 - September 2019
                </p>
            </button>
            <button onClick={onCashierClick} className='experience'>
                <p className='experience__company'>
                    Safeway 
                </p>
                <p className='experience__role'>
                    Cashier
                </p>
                <p className='experience__date'>
                    April 2015 - June 2018
                </p>
            </button>
        </section>

    )
}

export default WorkExperience