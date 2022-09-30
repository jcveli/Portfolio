import './about.styles.scss';
import Details from '../../components/about/about-details.component';
import Profile from '../../components/profile/profile.component'
import { motion } from 'framer-motion';


const About = () => { 
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}}
        >
            <div className='about'> 
                <div className='about-contents'>
                    <Profile />
                    <Details />  
                </div>
            </div>
        </motion.div>
       
    )
}


export default About; 