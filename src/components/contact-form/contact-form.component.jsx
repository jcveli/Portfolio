import { CForm, CInputGroup, CFormInput, CFormTextarea, CButton, CFormLabel } from '@coreui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './contact-form.styles.scss'
import '@coreui/coreui/dist/css/coreui.min.css'




const ContactForm = () => {
	const [validate, setValidate] = useState(false); 
	const handleSubmit = (event) => {
		const form = event.currentTarget
		if (form.checkValidity() === false) {
		  event.preventDefault()
		  event.stopPropagation()
		}
		setValidate(true)
	  }


	const thankYou = () => { 
		console.log("Message sent. Thank you!");
	}

    return (
        <motion.div 
			initial={{opacity:0}}
			animate={{opacity:1}}
			transition={{
				delay: 0.7
			}}
			className='form-container'
		>
			<CForm 
			action="https://formsubmit.co/dd5c09ef55994b3c44bb8f912c4474d9" 
			method="POST" 
			target="_blank"
			validated={validate}
			onSubmit={handleSubmit}
			noValidate 
			className='needs-validation'>
				<CFormLabel className='labels'>Email</CFormLabel>
				<CInputGroup className='input-group'>
					<CFormInput
						className='input-form' 
						type="email"
						size='lg' 
						name="email" 
						placeholder="name@example.com" 
						feedbackInvalid="Please enter your email address."
						tooltipFeedback						
						required
					/>   
				</CInputGroup>
				<CFormLabel className='labels'>Subject</CFormLabel>
				<CInputGroup className='input-group'>
					<CFormInput 
						className='input-form'
						type="text" 
						name="_subject" 
						placeholder="Subject" 
						size='lg' 
						feedbackInvalid="Please write in a subject for the message."
						tooltipFeedback
						required
					/>   
				</CInputGroup>
				<CFormLabel className='labels'>Message</CFormLabel>
				<CInputGroup className='input-group'>
					<CFormTextarea 
					className='input-form'
					type="text" 
					name="message" 
					aria-label="Message" 
					style={{height: 200}}
					placeholder='Enter your message here...'
					feedbackInvalid="Please enter a message." 
					tooltipFeedback
					required/> 
				</CInputGroup>
				<motion.div
					whileHover={{scale: 1.2}} 
					whileTap={{scale: 0.8}}
					className='submit-div'
				>
					<CButton type='submit' color="" className='submit-button'>Submit</CButton>
				</motion.div>
				<input type="hidden" name="_captcha" value="true"/>
           </CForm>

		   
		   
        </motion.div>
    )
}

export default ContactForm;