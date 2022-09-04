import { CCard, CCardBody,CCardText, CCardTitle, CButton, CCardImage} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'

import './project_card.styles.scss'

const ProjectCard = ({Projects}) => {
    
    return(
        
        <div className="project-container">

            {Projects.map((project) => (
                <CCard className="project-card" id={project.id}>
                    <CCardImage className='card-image' orientation="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" />
                    <CCardBody>
                        <CCardTitle>{project.title}</CCardTitle>
                        <CCardText>{project.description}</CCardText>
                        <CButton className="btn btn-warning" href={project.gitUrl}><i className="cib-github icon icon-l"></i> GitHub</CButton>
                        <CButton className="btn btn-primary" href="#">Live Demo</CButton>
                    </CCardBody>
                </CCard>
                
            ))}
            
        </div>
        
    )

}

export default ProjectCard;