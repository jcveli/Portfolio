import { CCard, CCardBody,CCardText, CCardTitle, CButton, CCardImage} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'

import './project_card.styles.scss'

const ProjectCard = ({Projects}) => {
    
    return(
        
        <div className="project-container">
            {Projects.map((project) => (
                
                <CCard className="project-card" key={project.id}>
                    <CCardImage className='card-image' orientation="top" src={project.imageUrl}/>
                    <CCardBody className="text-center">
                        <CCardTitle>{project.title}</CCardTitle>
                        <CCardText>{project.description}</CCardText>
                    </CCardBody>
                    <CCardBody>
                        <CButton className="btn btn-warning"  href={project.gitUrl}><i className="cib-github icon icon-l"></i> GitHub</CButton>
                        <CButton className="btn btn-primary" href={project.liveUrl}>Live Demo</CButton>
                    </CCardBody>
                </CCard>
                
            ))}
            
        </div>
        
    )

}

export default ProjectCard;