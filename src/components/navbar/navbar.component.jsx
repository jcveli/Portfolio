import { CContainer, CNavbar, CCollapse, CNavbarToggler, CNavItem, CNavLink, CNavbarNav, CNavbarBrand } from '@coreui/react';
import { Fragment,useState } from 'react';
import { Outlet} from 'react-router-dom';
import './navbar.styles.scss'

const Navigation = () => {
    //used to determine if the menu is open or not 
    const [visible, setVisible] = useState(false);



    return (
         
        <Fragment>
            <CNavbar expand="lg" colorScheme='dark' className='navigation-container'>
                <CContainer fluid className='fluid-container'>
                    <CNavbarBrand />
                    <CNavbarToggler
                        aria-label="Toggle navigation"
                        aria-expanded={visible}
                        onClick={() => setVisible(!visible)}
                        className="toggler-icon"
                    />
                    <CCollapse className='collapse-container navbar-collapse' visible={visible}>
                        <CNavbarNav className='nav-links-container'>
                            <CNavItem>
                                <CNavLink className='nav-link' href='#'>
                                    Home
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink className='nav-link' href='#about'>
                                About
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink className='nav-link' href='#projects'>
                                    Projects
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink className='nav-link' href='#contacts'>
                                    Contacts
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink className='nav-link' href='https://www.linkedin.com/in/jvelicaria/' target="_blank" rel="noopener noreferrer">
                                <i className="cib-linkedin icon icon-xxl" />
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink className='nav-link' href='https://github.com/jcveli' target="_blank" rel="noopener noreferrer">
                                    <i className="cib-github icon icon-xxl" />
                                </CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                    </CCollapse>
                </CContainer>
            </CNavbar>
            <Outlet />
        </Fragment>

        // <Fragment>
        //     <div className='navigation-container'>
        //         <div className='nav-links-container'>                  
        //             <a className='nav-link' href='#about'>About</a>
        //             <a className='nav-link' href='#projects'>Projects</a>
        //             <a className='nav-link' href='#contact'>Contact</a>
        //             <a className='nav-link' href='https://www.linkedin.com/in/jvelicaria/' target="_blank" rel="noopener noreferrer">
        //                 <i className="cib-linkedin icon icon-xxl"></i>
        //             </a>
        //             <a className='nav-link' href='https://github.com/jcveli' target="_blank" rel="noopener noreferrer">
        //                 <i className="cib-github icon icon-xxl"></i>
        //             </a>

        //             <div className='menu-icon'>
        //                 <i></i>
        //             </div>
        //         </div>
        //     </div>
        //     <Outlet />
        // </Fragment>
        
    )
}


export default Navigation; 