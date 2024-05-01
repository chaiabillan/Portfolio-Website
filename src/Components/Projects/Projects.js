import './Projects.scss'
import { Bootstrap } from 'react-bootstrap-icons'
import MySQL from '../../assets/images/logo-mysql-170x115.png';
import ReactLogo from '../../assets/images/React.webp';
import html from '../../assets/images/HTML5_Logo.svg';
// import css from '../../assets/images/CSS3_logo_and_wordmark.svg';
import sass from '../../assets/images/kisspng-sass-logo-cascading-style-sheets-scalable-vector-g-codzero-cms-blog-tool-publishing-platform-5b74aaa0de6192.1715579115343725129109.jpg';
import json from '../../assets/images/kisspng-json-computer-icons-jar-jar-icon-5b21baf3537433.5632766015289372033418.jpg';
import js from '../../assets/images/JavaScript-Logo.png';
import express from '../../assets/images/expressjs_logo_icon_169185.png';
import api from '../../assets/images/360_F_322956978_9ESBVewTYdhSu9G6qf2JazX9tUsdh53g.jpg';
import node from '../../assets/images/kisspng-node-js-javascript-npm-web-server-source-code-ideil-web-development-5b6d9526e4f434.1087011015339082629378.jpg';
import auth from '../../assets/images/Oauth_logo.svg.png';
import heroku from '../../assets/images/858dbc95513619c2dc3689474bc3f556.jpg';
import github from '../../assets/images/github.png';
import dom from '../../assets/images/1_nZYWlibq4bRWOLPGTV3TuQ.png';
import ProjectCookies from '../ProjectCookies/ProjectCookies';
import ProjectMyAllergyCompass from '../ProjectMyAllergyCompass/ProjectMyAllergyCompass';
import ProjectInStock from '../ProjectInStock/ProjectInStock';
import ProjectBrainFlix from '../ProjectBrainFlix/ProjectBrainFlix';
import ProjectBandSite from '../ProjectBandSite/ProjectBandSite';
import { useState } from 'react';


function Projects() {
    const [selectedProjects, setSelectedProjects] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProjects(project)
    }

    return (
        <section className="projects">
            <p className='projects__title'>
                Projects
            </p>
            <section className='skills'>
                <button className='skill' onClick={() => handleProjectClick(null)}>
                    All
                </button>
                <button onClick={() => handleProjectClick('bootstrap')} className={`skill ${selectedProjects === 'bootstrap' ? 'selected' : ''}`}>
                    <Bootstrap />
                </button>
                <button onClick={() => handleProjectClick('mysql')} className={`skill ${selectedProjects === 'mysql' ? 'selected' : ''}`}>
                    <img className='skill__image' src={MySQL} alt='MySQL' />
                </button>
                <button onClick={() => handleProjectClick('react')} className={`skill ${selectedProjects === 'react' ? 'selected' : ''}`}>
                    <img className='skill__image' src={ReactLogo} alt='react' />
                </button>
                <button onClick={() => handleProjectClick('html')} className={`skill ${selectedProjects === 'html' ? 'selected' : ''}`}>
                    <img className='skill__image' src={html} alt='html' />
                </button>
                <button onClick={() => handleProjectClick('sass')} className={`skill ${selectedProjects === 'sass' ? 'selected' : ''}`}>
                    <img className='skill__image' src={sass} alt='sass' />
                </button>
                <button onClick={() => handleProjectClick('json')} className={`skill ${selectedProjects === 'json' ? 'selected' : ''}`}>
                    <img className='skill__image' src={json} alt='json' />
                </button>
                <button onClick={() => handleProjectClick('javascript')} className={`skill ${selectedProjects === 'javascript' ? 'selected' : ''}`}>
                    <img className='skill__image' src={js} alt='javascript' />
                </button>
                <button onClick={() => handleProjectClick('express')} className={`skill ${selectedProjects === 'express' ? 'selected' : ''}`}>
                    <img className='skill__image' src={express} alt='express' />
                </button>
                <button onClick={() => handleProjectClick('api')} className={`skill ${selectedProjects === 'api' ? 'selected' : ''}`}>
                    <img className='skill__image' src={api} alt='api' />
                </button>
                <button onClick={() => handleProjectClick('node')} className={`skill ${selectedProjects === 'node' ? 'selected' : ''}`}>
                    <img className='skill__image' src={node} alt='node' />
                </button>
                <button onClick={() => handleProjectClick('auth')} className={`skill ${selectedProjects === 'auth' ? 'selected' : ''}`}>
                    <img className='skill__image' src={auth} alt='auth' />
                </button>
                <button onClick={() => handleProjectClick('heroku')} className={`skill ${selectedProjects === 'heroku' ? 'selected' : ''}`}>
                    <img className='skill__image' src={heroku} alt='heroku' />
                </button>
                <button onClick={() => handleProjectClick('github')} className={`skill ${selectedProjects === 'github' ? 'selected' : ''}`}>
                    <img className='skill__image' src={github} alt='github' />
                </button>
                <button onClick={() => handleProjectClick('dom')} className={`skill ${selectedProjects === 'dom' ? 'selected' : ''}`}>
                    <img className='skill__image' src={dom} alt='dom' />
                </button>
            </section>
            {(selectedProjects === 'react' || selectedProjects === 'github' || selectedProjects === 'bootstrap' || selectedProjects === 'sass' || selectedProjects === 'javascript' || selectedProjects === 'auth' || selectedProjects === 'html') && (
                <ProjectCookies className='selected' />
            )}
            {(selectedProjects === 'react' || selectedProjects === 'github' || selectedProjects === 'bootstrap' || selectedProjects === 'sass' || selectedProjects === 'javascript' || selectedProjects === 'auth' || selectedProjects === 'html') && (
                <ProjectMyAllergyCompass className='react github bootstrap sass javascript node api express html' />
            )}
            {(selectedProjects === 'react' || selectedProjects === 'github' || selectedProjects === 'sass' || selectedProjects === 'javascript' || selectedProjects === 'mysql' || selectedProjects === 'node' || selectedProjects === 'html' || selectedProjects === 'express') && (
                <ProjectInStock className='react github sass javascript mysql node express html' />
            )}
            {(selectedProjects === 'react' || selectedProjects === 'github' || selectedProjects === 'json' || selectedProjects === 'sass' || selectedProjects === 'html' || selectedProjects === 'javascript') && (
                <ProjectBrainFlix className='react github json sass html javascript' />
            )}
            {(selectedProjects === 'html' || selectedProjects === 'sass') && (
                <ProjectBandSite className='html sass' />
            )}
        </section>
    )
}

export default Projects