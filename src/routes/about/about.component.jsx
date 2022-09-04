import './about.styles.scss';
import Details from '../../components/about/about-details.component';
import Profile from '../../components/profile/profile.component'

const About = () => { 
    return (
        <div className='about-container' id='about'>
            <Profile />    
            <Details />
                
        </div>
        
    )
}


export default About; 