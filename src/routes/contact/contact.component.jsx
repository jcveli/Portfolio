import ContactForm from '../../components/contact/contact-form.component'
import './contact.styles.scss'


const Contact = () => {
    return(

        <div className="contact-container" id="contact">
            <div className='contact-field'>
                <div className='contact-subtitles'>
                <h1>Contact</h1>
                <p>If you need to reach me contact me via LinkedIn or message me here!</p>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}


export default Contact;