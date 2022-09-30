import { motion } from "framer-motion";
import './animated-text.styles.scss';

const AnimatedText = ({texts}) => { 


    const childAnimation = {
        initial:{
            opacity: 0,
            y: 0,
            transition:{
                type:"spring",
                damping: 12, 
                stiffness: 100
            }
        },
        animate:{
            opacity: 1,
            y: 20,
    
            transition:{
                type:"spring",
                damping: 12, 
                stiffness: 100
            }
        }
    }

    return(
       <div className="subtitle-container">
            {
                texts.map((text) =>{
                    const {id, message, className} = text; 
                    console.log(id)
                    return(
                        <motion.div
                            key={id} 
                            transition={{
                                delay: id * 1
                            }}
                            
                        >
                            <motion.h1
                                initial={childAnimation.initial}
                                animate={childAnimation.animate}  
                                className={className}
                            >{message}</motion.h1>
                        </motion.div>
                    )
                
                })
            }
        </div>
    )
}

export default AnimatedText; 