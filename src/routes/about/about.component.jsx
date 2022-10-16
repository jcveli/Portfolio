import './about.styles.scss';
import Details from '../../components/about/about-details.component';
import Profile from '../../components/profile/profile.component'

import CIcon from '@coreui/icons-react';
import { cibHtml5Shield, cibCss3Shiled, cibSass, cibJavascript, cibReact } from '@coreui/icons';

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
                            <CIcon icon={cibHtml5Shield} size='xxl'/>
                            <h2>HTML</h2>
                        </div>
                        <div className='skill-icon'>
                            <CIcon icon={cibCss3Shiled } size='xxl'/>
                            <h2>CSS</h2>
                        </div>
                        <div className='skill-icon'>
                            <CIcon icon={cibSass} size='xxl'/>
                            <h2>SASS</h2>
                        </div>
                        <div className='skill-icon'>
                            <CIcon icon={cibJavascript} size='xxl'/>
                            <h2>JavaScript</h2>
                        </div>
                        <div className='skill-icon'>
                            <CIcon icon={cibReact} size='xxl'/>
                            <h2>React</h2>
                        </div>
                    </div>
                </div> 
            </div>
        
       
    )
}


export default About; 