import { Fragment } from 'react';
import {Outlet} from 'react-router-dom';

//import { CNavbar } from '@coreui/react';
import './navbar.styles.scss'

const Navigation = () => { 
    return (
        <div>
            <Fragment>
                <div className='navigation-container'>
                    <div className='nav-links-container'>                  
                        <a className='nav-link' href='#about'>About</a>
                        <a className='nav-link' href='#projects'>Projects</a>
                        <a className='nav-link' href='#contact'>Contact</a>
                        <a className='nav-link' href='https://www.linkedin.com/in/jvelicaria/' target="_blank" rel="noopener noreferrer">
                            <i className="cib-linkedin icon icon-xxl"></i>
                        </a>
                        <a className='nav-link' href='https://github.com/jcveli' target="_blank" rel="noopener noreferrer">
                            <i className="cib-github icon icon-xxl"></i>
                        </a>
                    </div>
                </div>
                <Outlet />
            </Fragment>
        </div>
    )
}


export default Navigation; 