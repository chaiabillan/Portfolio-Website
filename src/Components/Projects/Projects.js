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


function Projects () {
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
                <button className='skill'>
                    All
                </button>
                <button className='skill'>
                    <Bootstrap />
                </button>
                <button className='skill mysql'>
                    <img className='skill__image' src={MySQL} alt='MySQL'/>
                </button>
                <button className='skill react'>
                    <img className='skill__image' src={ReactLogo} alt='react'/>
                </button>
                <button className='skill html'>
                    <img className='skill__image' src={html} alt='html'/>
                </button>
                <button className='skill sass'>
                    <img className='skill__image' src={sass} alt='sass'/>
                </button>
                <button className='skill json'>
                    <img className='skill__image' src={json} alt='json'/>  
                </button>
                <button className='skill javascript'>
                    <img className='skill__image' src={js} alt='javascript'/>  
                </button>
                <button className='skill express'>
                    <img className='skill__image' src={express} alt='express'/>
                </button>
                <button className='skill api'>
                    <img className='skill__image' src={api} alt='api'/>
                </button>
                <button className='skill node'>
                    <img className='skill__image' src={node} alt='node'/>
                </button>
                <button className='skill auth'>
                    <img className='skill__image' src={auth} alt='auth'/>
                </button>
                <button className='skill heroku'>
                    <img className='skill__image' src={heroku} alt='heroku'/>
                </button>
                <button className='skill github'>
                    <img className='skill__image' src={github} alt='github'/>
                </button>
                <button className='skill dom'>
                    <img className='skill__image' src={dom} alt='dom'/>
                </button>
            </section>
            
            <ProjectCookies className='react github bootstrap sass javascript auth html'/>
            <ProjectMyAllergyCompass className='react github bootstrap sass javascript node api express html'/>
            <ProjectInStock className='react github sass javascript mysql sass javascript node express html' />
            <ProjectBrainFlix className='react github json sass html javascript' />
            <ProjectBandSite className='html sass' />

        </section>
    )
}

export default Projects