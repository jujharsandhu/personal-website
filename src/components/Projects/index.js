import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import ProjectBox from './ProjectBox'
import Website from '../../assets/images/website.png'
import PacmanPic from '../../assets/images/pacman.jpeg'
// import React from 'react';

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
                    strArray={['M', 'y', ' ', 'p', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                    idx={15}
                    />
                </h1>
                <div className='projectList'>
                    <ProjectBox className='website' name="This Website" image={Website}/>
                    <ProjectBox className='pacman' name='Pacman' image={PacmanPic} />

                </div>
                <p>
                    I am trying to recruit
                </p>
                <p>I am working on it</p>
                <p>I like playing basketball</p>
            </div>

            {/* <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>

            </div> */}
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Projects