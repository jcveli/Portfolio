import { motion } from "framer-motion";
import { CCard, CCardImage, CCardBody, CCardSubtitle, CCardText, CButton, CCardHeader } from '@coreui/react';
import CIcon from "@coreui/icons-react";
import '@coreui/coreui/dist/css/coreui.min.css'

import './project_card.styles.scss'
import { ViewportSetting } from "../../utils/animation";
import { cibGithub, cilScreenDesktop } from "@coreui/icons";

const ProjectCard = ({Projects}) => {

    return(

            <div className="project-container">
                {
                    Projects.map((project) => {
						const {id, title, description, gitUrl, liveUrl, imageUrl, tech} = project;
						return(
							<motion.div
							initial={{opacity: 0, scale:0.5}}
							whileInView={{opacity: 1,
								scale:1,
								transition:{
									delay:id * 0.3 
								}
							}}
							viewport={ViewportSetting}
							whileHover={{scale:1.03}}
							className='card-container'
							key={id}
						>
							<CCard className="project-card">
								<CCardHeader className="title" component="h2" style={{textAlign:'center'}}>{title}</CCardHeader>
								<CCardImage className='card-image' orientation="top" src={imageUrl}/>
								
								<CCardSubtitle className="tech-span">{tech}</CCardSubtitle>
								
								<CCardBody className="text-container">
									<CCardText className="project-description">{description}</CCardText>
								</CCardBody>
								<CCardBody className="card-buttons">
									<CButton className="btn btn-warning"  href={gitUrl} target="_blank" rel="noopener noreferrer"><CIcon icon={cibGithub} size='lg'/> GitHub</CButton>
									<CButton className="btn btn-primary" href={liveUrl} target="_blank" rel="noopener noreferrer"><CIcon icon={cilScreenDesktop} size='lg'/> Demo</CButton>
								</CCardBody>
							</CCard>
						</motion.div>
						)
					})}
			</div>
            

    )

}

export default ProjectCard;