
// import { View, StyleSheet, Dimensions, Image } from 'react';

import Graduation from "../../assets/images/graduation.JPG"
import TLOP from '../../assets/images/tlop.JPG'
import Vinyl from '../../assets/images/vinyl.png'
import './index.scss'
import { Loader } from 'react-loaders';
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Basketball from '../../assets/images/basketball.png'

const Hobbies = () => {

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
        <div className='container hobby-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['M', 'y', ' ', 'H', 'o', 'b', 'b', 'i', 'e', 's']}
                    idx={15}
                    />
                </h1>

            <p className='basketball-subtext'> I enjoy playing and watching many sports including basketball. </p>
            
            <img className='yeezy' src={Graduation} alt='graduation' />
            <img className='yeezy' src={TLOP} alt='tlop' />
            <img className="vinyl" src={Vinyl} alt='vinyl'/>
            
        
            <p className="music-subtext"> I enjoy listening to music and going to concerts. </p>

            {/* <div className="basketball">
                <div className="ball">
                    <div className="lines" />
                    <div className="shadow" />
                </div>
            </div> */}

            <img className="basketball" src={Basketball} alt='basketball' />
            <div className="shadow" />

        </div>
    </ div>
    <Loader type='pacman' />
    </>

    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#34499c',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     vinylContainer: {
//         width: Dimensions.get('screen').width,
//         height: Dimensions.get('screen').height,
//         // width: '50px',
//         // height: '50px',
//         alignItems: 'center',
//         justifyContent: 'center'

//     }
// });
/* <div className='vinyl-spin'>
            <View style={styles.container}>
                <View style={styles.vinylContainer}>
                    <View style={{
                        width: '20%',
                        height: '20%',
                        justifyContent: 'center',
                        flexDirection: 'row',

                    }}>
                        <Image source={require('../../assets/images/graduation.JPG')} style={{
                            width: '5%',
                            height: '5%',
                            position: 'absolute',
                            zIndex: 5,
                            left: '12.5%'
                        }} />

                        <Image source={require('../../assets/images/vinyl.png')} style={{
                            width: '5%',
                            height: '5%',
                            position: 'absolute',
                            resizeMode: 'contain',
                            left: '39%'
                        }} />
                    </View>

                </View>

            </View>
        </div> */
export default Hobbies