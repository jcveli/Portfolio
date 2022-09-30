
import { motion } from 'framer-motion';
import './about-details.styles.scss'

const AboutDetails = () => {
    return (       
        
            <div className='details-container'>
            <motion.h1
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                    delay: 0.7
                }}
              
            >
                About Me<br />
            </motion.h1>
                <motion.p
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                        delay: 1
                    }}
                >
                    <code>Hello there!<br /> I'm Jerald Velicaria,</code>
                    <p>I am a web developer seeking an entry-level position or internship in the industry to
                    deliver applications <br />that engages users and can possibly make user's lives simpler.
                    <br />I have experience with working as a Frontend developer and team leader in an AGILE work environment following the SCRUM
                    methodoloy.<br />
                    Feel free to take a look at my resume to look at my technical skills, and check out my <a href='https://www.linkedin.com/in/jvelicaria/' className='link'>
                    LinkedIn</a> and my repositories in <a href='https://github.com/jcveli' className='link'>GitHub</a>. 
                    </p>
                </motion.p>
            </div>
    
    )

}

export default AboutDetails; 