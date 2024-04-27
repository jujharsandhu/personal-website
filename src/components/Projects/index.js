import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngular, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import ProjectBox from './ProjectBox'
import Website from '../../assets/images/website.png'
import PacmanPic from '../../assets/images/pacman.jpeg'
import React from 'react';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])



    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                    idx={15}
                    />
                </h1>
                <div className='projectList'>
                    <ProjectBox className='website' name="This Website" image={Website}/>
                    <br />
                    <ProjectBox className='pacman' name='Pacman' image={PacmanPic} />
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Projects