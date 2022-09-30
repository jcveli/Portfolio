import { motion } from "framer-motion";
import { CCard, CCardBody,CCardText, CCardTitle, CButton, CCardImage} from "@coreui/react";

import '@coreui/coreui/dist/css/coreui.min.css'

import './project_card.styles.scss'

const ProjectCard = ({Projects}) => {
    
    return(
        
        <div className="project-container">
            {
                Projects.map((project) => {
                    const {id, imageUrl, title, description, gitUrl, liveUrl} = project; 
                    return (
                        <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{
                                delay: id * 0.4
                            }}
                            className='card-container'
                            key={id}
                        >
                            <CCard className="project-card">
                                <CCardImage className='card-image' orientation="top" src={imageUrl}/>
                                <CCardBody className="text-center">
                                    <CCardTitle>{title}</CCardTitle>
                                    <CCardText>{description}</CCardText>
                                </CCardBody>
                                <CCardBody className="card-buttons">
                                    <CButton className="btn btn-warning"  href={gitUrl}><i className="cib-github icon icon-l"></i> GitHub</CButton>
                                    <CButton className="btn btn-primary" href={liveUrl}>Demo</CButton>
                                </CCardBody>
                            </CCard>
                        </motion.div>
                    )
                })
            }
            
        </div>
        
    )

}

export default ProjectCard;