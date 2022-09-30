import Welcome from '../../components/welcome/welcome.component'
import { motion } from 'framer-motion'

import './home.styles.scss'

const Home = () => {
    return(
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}}
        >
            <div className="app-container">
                <Welcome />    
            </div>
        </motion.div>
    )
   
}

export default Home;