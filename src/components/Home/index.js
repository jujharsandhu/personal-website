
import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J', 'u', 'j', 'h', 'a', 'r']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r']
    
    // useEffect(() => {
    //     return (setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000))
    //   }, [])


    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, []);
    useEffect(() => {
        let words = document.querySelectorAll(".word");
        words.forEach((word) => {
            let letters = word.textContent.split("");
            word.textContent = "";
            letters.forEach((letter) => {
                let span = document.createElement("span");
                span.textContent = letter;
                span.className = "letter";
                word.append(span);
            });
        });
        let currentWordIndex = 0;
        let maxWordIndex = words.length - 1;
        words[currentWordIndex].style.opacity = "1";
    
        let rotateText = () => {
            let currentWord = words[currentWordIndex];
            let nextWord = currentWordIndex === maxWordIndex ? words[0]: words[currentWordIndex + 1];
            Array.from(currentWord.children).forEach((letter, i) => {
                setTimeout(() => {
                    letter.className = "letter out";
                }, i * 80);
            });
            nextWord.style.opacity = "1";
            // currentWord.style.opacity = "0";

            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = "letter behind";
                setTimeout(() => {
                    letter.className = "letter in";
                }, 340 + i * 80);
            });;
            currentWordIndex = 
            currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
         }
         rotateText();
         setInterval(rotateText, 4000);

    })


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>   
                <br />
                <span className={`${letterClass} _13`}>I</span>   
                <span className={`${letterClass} _14`}>'m</span>   

                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                // idx={22}
                idx={19}/> 
                               
                </h1>
                <br />
                <div class='rotating-text'>
                    <p>Experts would describe Jujhar as </p>
                    < br />
                    <p>
                        <span class='word w-1'>awesome!</span>
                        <span class='word w-2'>passionate!</span>
                        <span class='word w-3'>goated!</span>

                        {/* <span class='word w-3'>a&nbspteam&nbspplayer!</span> */}
                        <span class='word w-4'>reliable!</span>
                        <span class='word w-5'>egirl!</span>

                        {/* <span class='word w-5'>an&nbspeager&nbsplearner!</span> */}


                    </p>
                </div>
                <h2>Full Stack Developer / Python / Java / JavaScript</h2>

                <Link to='/hobbies' className='flat-button'>
                    MORE ABOUT ME
                </Link>
            </div>
            {/* <Logo /> */}
        </div>
        <Loader type='pacman' />
        </>
    )
}


export default Home