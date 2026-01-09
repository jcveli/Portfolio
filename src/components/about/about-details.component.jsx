import { ViewportSetting } from '../../utils/animation';
import { motion } from 'framer-motion';
import './about-details.styles.scss'

const AboutDetails =() => {
    const textAnimate ={
        initial:{
            opacity:0, 
            x: -20
        },
        whileInView:{
            opacity:1,
            x: 0
        }
    }

    return (       

            
        
            <section  className='details-container'>
                <motion.h1
                    initial={textAnimate.initial}
                    whileInView={textAnimate.whileInView}
                    viewport={ViewportSetting}
                    transition={{
                        delay: 0.7
                    }}
                >
                    About Me<br />
                </motion.h1>
                <motion.span
                    initial={textAnimate.initial}
                    whileInView={textAnimate.whileInView}
                    viewport={ViewportSetting}
                    transition={{
                        delay: 1
                    }}
                >
                    <code>Hello there!<br /> I'm Jerald Velicaria,</code><br />
                    <span>I'm currently a graduate student at Arizona State University studying Computer Science with a
                        concentration in Big Data Systems. I have experience in creating web applications with the React
                        framework. Currently, I have aspirations in working as a data engineer.
                    <br />I have experience with working as a frontend developer and team leader in an AGILE work environment following the SCRUM
                    methodoloy.<br />
                    Feel free to take a look at my resume to look at my technical skills, and check out my <a href='https://www.linkedin.com/in/jvelicaria/' target="_blank" className='link' rel="noopener noreferrer">
                    LinkedIn</a> and my repositories in <a href='https://github.com/jcveli' target="_blank" className='link' rel="noopener noreferrer">GitHub</a>. 
                    </span>
                </motion.span>
            </section>
    
    )

}

export default AboutDetails; 