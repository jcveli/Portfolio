import './about.styles.scss';
import Details from '../../components/about/about-details.component';
import Profile from '../../components/profile/profile.component'

import CIcon from '@coreui/icons-react';
import { cibHtml5Shield, cibCss3Shiled, cibSass, cibJavascript, cibReact, cibNodeJs } from '@coreui/icons';

const About = () => { 
    return (
        
            <div className='about' id='about'> 
                <div className='about-contents'>
                    <Profile />
                    <Details /> 
                    
                </div>
                <div className='skills-grid'>
                    <h1>Skills</h1>
                    <div className='skills-list'>
                        <div className='skill-icon'>
                            <CIcon icon={cibHtml5Shield} size='3xl'/>
                            <h2>HTML</h2>
                        </div>
                        <div className='skill-icon'>
                            <CIcon icon={cibCss3Shiled } size='3xl'/>
                            <h2>CSS</h2>
                        </div>
                        <div className='skill-icon'>
                            <CIcon icon={cibSass} size='3xl'/>
                            <h2>SASS</h2>
                        </div>
                        <div className='skill-icon'>
                            <CIcon icon={cibJavascript} size='3xl'/>
                            <h2>JavaScript</h2>
                        </div>
                        <div className='skill-icon'>
                            <CIcon icon={cibReact} size='3xl'/>
                            <h2>React</h2>
                        </div>
                        <div className='skill-icon'>
                            <CIcon icon={cibNodeJs} size='3xl'/>
                            <h2>Node.js</h2>
                        </div>
                    </div>
                </div> 
            </div>
        
       
    )
}


export default About; 