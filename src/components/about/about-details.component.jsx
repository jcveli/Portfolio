
import { motion } from 'framer-motion';
import './about-details.styles.scss'

const AboutDetails = () => {
    return (       
        <motion.div
            transition={{delay: 1}}
        >
            <div className='details-container'>
                <h1>About Me</h1><br /><br />
                <code>Hello there!<br /> I'm Jerald Velicaria,</code>
                <p>I am a web developer seeking an entry-level position or internship in the industry to
                deliver applications <br />that engages users and can possibly make user's lives simpler.
                <br />I have experience with working as a Frontend developer and team leader in an AGILE work environment following the SCRUM
                methodoloy.<br />
                Feel free to take a look at my resume to look at my technical skills, and check out my <a href='https://www.linkedin.com/in/jvelicaria/' className='link'>
                LinkedIn</a> and my repositories in <a href='https://github.com/jcveli' className='link'>GitHub</a>. 
                </p>
                
            </div>
        </motion.div>
    )

}

export default AboutDetails; 