import { CFooter } from '@coreui/react'

import './footer.styles.scss'

const Footer = () => {
    return(
        <CFooter className='footer-container'>
            <div className='footer-contents'>
                <div className='signature'>
                    <code>&copy; 2022 Created & Designed by Jerald Velicaria</code>
                </div>
                <div className='footer-links'>
                    <span>Created With
                     <i class="cib-html5"/>
                    <i class="cib-css3-shiled"/> <i class="cib-javascript"/> <i class="cib-react"/> <i class="cib-framer"/></span>
                </div>
            </div>
        </CFooter>
    )

}

export default Footer; 