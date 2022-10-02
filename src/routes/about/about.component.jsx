import './about.styles.scss';
import Details from '../../components/about/about-details.component';
import Profile from '../../components/profile/profile.component'



const About = () => { 
    return (
        
            <div className='about' id='about'> 
                <div className='about-contents'>
                    <Profile />
                    <Details />  
                </div>
            </div>
        
       
    )
}


export default About; 