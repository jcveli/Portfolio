import { CInputGroup, CFormInput, CFormTextarea, CButton } from '@coreui/react'
import './contact-form.styles.scss'





const ContactForm = () => {
    return (
        <div className='form-container'>
            <CInputGroup className='mb-3'>
                <CFormInput placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"/>   
            </CInputGroup>
            <CInputGroup className='mb-3'>
                <CFormInput placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>   
            </CInputGroup>

            <CInputGroup className='mb-3'>
                <CFormTextarea aria-label="Message" className='textArea' placeholder='Message'></CFormTextarea>
            </CInputGroup>

            <CButton>Submit</CButton>
        </div>
    )
}

export default ContactForm;