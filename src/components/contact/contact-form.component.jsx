import { CForm, CInputGroup, CFormInput, CFormTextarea, CButton } from '@coreui/react'
import { useState } from 'react'
import './contact-form.styles.scss'





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
			action="https://formsubmit.co/jeraldcvel@gmail.com" 
			method="POST" 
			validated={validate}
			onSubmit={handleSubmit}
			noValidate 
			className='needs-validation'>
				<CInputGroup className='input-group'>
					<CFormInput 
						type="email" 
						name="email" 
						placeholder="Email" 

						feedbackInvalid="Please enter your email address."
						tooltipFeedback						
						required
					/>   
				</CInputGroup>
				<CInputGroup className='input-group'>
					<CFormInput 
						type="text" 
						name="_subject" 
						placeholder="Subject" 
						feedbackInvalid="Please write in a subject for the message."
						tooltipFeedback
						required
					/>   
				</CInputGroup>
				<CInputGroup className='input-group'>
					<CFormTextarea 
					type="text" 
					name="message" 
					aria-label="Message" 
					className='textArea' 
					placeholder='Message'
					feedbackInvalid="Please enter a message." 
					tooltipFeedback
					required/> 
				</CInputGroup>
				<CButton type='submit' className='submit-button'>Submit</CButton>
           </CForm>
            
        </div>
    )
}

export default ContactForm;