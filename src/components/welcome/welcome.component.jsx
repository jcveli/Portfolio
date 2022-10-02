import videoBg from '../../assets/video/lofi_room_animation.mp4'
import AnimatedText from '../animated-text/animated-text.component'
import { motion } from 'framer-motion'
import './welcome.styles.scss'

const Welcome = () => {
    const texts = [
        {
            'id': 1,
            'message': 'Hello World!',
            'className': ''
        },
        {
            'id': 2,
            'message': 'Jerald Velicaria',
            'className': 'name'
        },
        {
            'id': 3,
            'message': 'Web Developer',
            'className': 'role'
        },
    ];


    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}}
        className='welcome-container'>
                <video src={videoBg} autoPlay loop muted playsInline />
                <AnimatedText texts={texts}/>
        </motion.div>
    )
}

export default Welcome;