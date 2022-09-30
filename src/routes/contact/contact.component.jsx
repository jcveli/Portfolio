import { motion } from 'framer-motion'
import ContactForm from '../../components/contact-form/contact-form.component'
import '@coreui/coreui/dist/css/coreui.min.css'
import './contact.styles.scss'


const Contact = () => {
    return(

        <motion.div
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}}
        >
            <div className="contact">
                <div className='contact-field'>
                    <motion.div 
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        exit={{opacity: 0}}
                        transition={{
                            delay: 0.4
                        }}
                    className='contact-subtitles'>
                        <h1>Contact</h1>
                        <p>If you need to reach me contact me via LinkedIn or message me here!</p>
                       
                    </motion.div>
                    <ContactForm />
                </div>
            </div>
        </motion.div>
    )
}


export default Contact;