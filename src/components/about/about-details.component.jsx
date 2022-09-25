import { CButton } from '@coreui/react';
import './about-details.styles.scss'

const AboutDetails = () => {
    return (       
        <div className='details-container'>
            <h1>ABOUT ME</h1>
            <p>Hello! I'm Jerald Velicaria, a web developer seeking an entry-level position or internship in the industry to
            deliver applications that engages users and can possibly make user's lives simpler. <br /><br />
            I have experience with working as a Frontend developer and team leader in an AGILE work environment following the SCRUM
            methodoloy.<br /> <br />
            Feel free to take a look at my resume to look at my technical skills, and check out my <a href='https://www.linkedin.com/in/jvelicaria/' className='link'>
            LinkedIn</a> and my repositories in <a href='https://github.com/jcveli' className='link'>GitHub</a>. 
            </p>
            <CButton color='info' className='resume-button'>
            <i className="cil-cloud-download icon icon-l"/> Resume
            </CButton>
        </div>
    )

}

export default AboutDetails; 