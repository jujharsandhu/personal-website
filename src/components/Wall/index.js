import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Wall = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();


    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])
    
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm (
                'gmail',
                'template_2210kn8',
                refForm.current, {
                publicKey: 'wgWmwylpJ8smzApcz',
                }
            )
        
            .then (
                () => {
                    alert('Message successfuly sent')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, try again')
                }
            )
    }

    return (
        <>
         <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['W','a','l','l',' ','o','f',' ', 'J', 'o', 'k', 'e', 's']}
                    idx={15} 
                    />
                </h1>
                <p>
                    How many tickles does it take to tickle an octopus
                    < br />
                    <b >
                        Tentacles
                    </b>
                </p>
                <p>
                    What do you call a beautiful insect?
                    < br />
                    <b >
                        eleg-ant
                    </b>
                </p>
                <p>
                    Whenever I ask my dog how their day went, they always say the same thing.
                    < br />
                    <b >
                        Rough!
                    </b>
                </p>
                <p>
                    Someone asked me to name two structures that hold water and I was like...
                    < br />
                    <b >
                        well damn!
                    </b>
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='First Name' required />
                            </li>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Last Name' required />
                            </li>
                            {/* <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li> */}
                            <li>
                                <textarea placeholder='Type Your Dad Joke' name='message' required />
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
         </div>
         <Loader type="pacman" />

        </>
    )
}


export default Wall