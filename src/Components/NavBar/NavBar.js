import './NavBar.scss';
import { useState, useEffect } from 'react';

function NavBar () {
    const [activeComponent, setActiveComponent] = useState('hero');

    useEffect(() => {
        // Add scroll event listener to detect which component is in view
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const hero = document.getElementById('hero');
            const about = document.getElementById('about');
            const projects = document.getElementById('projects');
            const resume = document.getElementById('resume');

            if (
                scrollPosition >= hero.offsetTop &&
                scrollPosition < about.offsetTop
            ) {
                setActiveComponent('hero');
            } else if (
                scrollPosition >= about.offsetTop &&
                scrollPosition < projects.offsetTop
            ) {
                setActiveComponent('about');            } else if (
                scrollPosition >= projects.offsetTop &&
                scrollPosition < resume.offsetTop
            ) {
                setActiveComponent('projects');            } else {
                setActiveComponent('resume');
            }
        };

        // Attach the scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        window.scrollTo({ top: 0, behavior: 'auto' });

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, []);

    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            window.scrollTo({
                top: component.offsetTop,
                behavior: 'smooth' // Smooth scrolling animation
            });
            console.log(componentId)
        }
    };

    return (
        <section className='nav-bar'>
            {/* Add click event handlers to each circle */}
            <div
                className={`nav-bar__circle ${activeComponent === 'hero' ? 'active' : ''}`}
                onClick={() => scrollToComponent('hero')}
            ></div>
            <div
                className={`nav-bar__circle ${activeComponent === 'about' ? 'active' : ''}`}
                onClick={() => scrollToComponent('about')}
            ></div>
            <div
                className={`nav-bar__circle ${activeComponent === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToComponent('projects')}
            ></div>
            <div
                className={`nav-bar__circle ${activeComponent === 'resume' ? 'active' : ''}`}
                onClick={() => scrollToComponent('resume')}
            ></div>
        </section>
    )
}

export default NavBar