import { CForm, CInputGroup, CFormInput, CFormTextarea, CButton, CFormLabel } from '@coreui/react'
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

    return (
        <div className='form-container'>
			<CForm 
			action="https://formsubmit.co/dd5c09ef55994b3c44bb8f912c4474d9" 
			method="POST" 
			validated={validate}
			onSubmit={handleSubmit}
			noValidate 
			className='needs-validation'>
				<CFormLabel className='labels'>Email</CFormLabel>
				<CInputGroup className='input-group'>
					<CFormInput 
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
					type="text" 
					name="message" 
					aria-label="Message" 
					className='textArea' 
					placeholder='Enter your message here...'
					feedbackInvalid="Please enter a message." 
					tooltipFeedback
					required/> 
				</CInputGroup>
				<div>
					<CButton type='submit' color="" className='submit-button'>Submit</CButton>
				</div>
           </CForm>
            
        </div>
    )
}

export default ContactForm;