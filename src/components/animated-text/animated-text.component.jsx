import { motion } from "framer-motion";
import './animated-text.styles.scss';

const AnimatedText = ({texts}) => { 

	


    const parentContainer = { 
        hidden: {opacity: 0},
        visible: (i = 1) => ({
			opacity: 1,
			transition: {staggerChildren: 0.12, delayChildren: 0.04 * i},
		})
    }

    return(
       <motion.div
			style={{overflow:"hidden", display:"flex"}}
        	className="subtitle-container"
			variants={parentContainer}	
			initial="hidden"
			animate="visible"
		>
            {
                texts.map((text) =>{
                    const {id, message, className} = text; 
					
                    return(
                       
                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    x: 20,
                                    transition:{
                                        type:"spring",
                                        damping: 13, 
                                        stiffness: 100
                                    }
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition:{
                                        delay: 0.4 * id,
                                        type:"spring",
                                        damping: 12, 
                                        stiffness: 100
                                    }
                                }}
                                
								key={id}
                                className={className}
                            >{message}</motion.h1>
                       
                    )
                
                })
            }
        </motion.div>
    )
}

export default AnimatedText; 