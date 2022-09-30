import { motion } from 'framer-motion'
import ContactForm from '../../components/contact/contact-form.component'
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
                    <div className='contact-subtitles'>
                        <h1>Contact</h1>
                        <p>If you need to reach me contact me via LinkedIn or message me here!</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </motion.div>
    )
}


export default Contact;