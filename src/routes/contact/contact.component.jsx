import { motion } from 'framer-motion'
import ContactForm from '../../components/contact-form/contact-form.component'
import './contact.styles.scss'


const Contact = () => {
    return(

        <motion.div
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}}
        >
            <div className="contact">
                <motion.div 
                    initial={{opacity:0, scale:0.3}}
                    animate={{
                        opacity:1, 
                        scale:1,
                        transition:{
                            delay: 0.2,
                        }
                    
                    }}
                className='contact-field'>
                    <motion.div 
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        exit={{opacity: 0}}
                        transition={{
                            delay: 0.6
                        }}
                    className='contact-subtitles'>
                        <h1>Contact</h1>
                        <p>If you need to reach me contact me via LinkedIn or message me here!</p>
                        <ul className='contact-details'>
                            <p><i className="cib-linkedin icon icon-xl" /><a href='https://www.linkedin.com/in/jvelicaria/' target="_blank" className='link' rel="noopener noreferrer"> LinkedIn</a></p>
                            <p><i className="cil-phone icon icon-xl" /> (916)462-7120</p>
                            <p><i className="cib-gmail icon icon-xl" /> jeraldcvel@gmail.com</p>
                        </ul>
                    </motion.div>

                    <ContactForm />

                </motion.div>
            </div>
        </motion.div>
    )
}


export default Contact;