import React from 'react'
import Aboutbanner from '../moleculus/Aboutbanner'
import Headermain from './Headermain'
import AboutImage from '../moleculus/AboutImage'
import AboutBan2 from './AboutBan2'
import Maintanceflow2 from '../moleculus/Maintanceflow2'
import Overview from './Overview'
import Container from '../atoms/Container'
import Footer from './Footer'
// import Worker from '../moleculus/Worker'
function About() {
    return (
        <div>
            <Headermain />
            <Aboutbanner />
            <AboutBan2 />
            <div className='mt-[50px]'>
                {/* <Maintanceflow2 /> */}
            </div>
            <Container>
                <Overview />
            </Container>
            {/* new  import*/}
            {/* <Worker /> */}

            <Footer />
        </div>
    )
}

export default About
