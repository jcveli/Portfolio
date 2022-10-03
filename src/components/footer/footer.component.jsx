import { CFooter } from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { cibCss3Shiled, cibFramer, cibHtml5Shield, cibJavascript, cibReact } from '@coreui/icons';
import './footer.styles.scss'

const Footer = () => {
    return(
        <CFooter className='footer-container'>
            <div className='footer-contents'>
                <div className='signature'>
                    <code>&copy; 2022 Created & Designed by Jerald Velicaria</code>
                </div>
                <section className='footer-links'>
                    <span>Created With 
                        <div>
                            <CIcon icon={cibHtml5Shield} size="xl" className='tech-icon'/>
                            <CIcon icon={cibCss3Shiled} size="xl" className='tech-icon'/>
                            <CIcon icon={cibJavascript} size="xl" className='tech-icon'/>
                            <CIcon icon={cibReact} size="xl" className='tech-icon'/> 
                            <CIcon icon={cibFramer} size="xl" className='tech-icon'/>
                        </div>  
                    </span>
                </section>
            </div>
        </CFooter>
    )

}

export default Footer; 