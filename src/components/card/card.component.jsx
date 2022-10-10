import { CCard, CCardImage, CCardBody, CCardSubtitle, CCardText, CButton, CCardHeader } from '@coreui/react';
import { motion } from "framer-motion";
import { ViewportSetting } from "../../utils/animation";

import CIcon from "@coreui/icons-react";
import { cibGithub, cilScreenDesktop, cilTags } from "@coreui/icons";

import './card.styles.scss';
import TechTag from '../tech-tag/tech-tag.component';

const Card = ({Project}) => { 
    const {id, title, description, gitUrl, liveUrl, imageUrl, tech} = Project; 
  
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
        >
            <CCard className="project-card">
                <CCardHeader className="title" component="h2" style={{textAlign:'center'}}>{title}</CCardHeader>
                <CCardImage className='card-image' orientation="top" src={imageUrl}/>
                
                <CCardSubtitle className="tech-span">
                    <CIcon icon={cilTags} size='xxl'/> 
                    {
                        tech.map((tag) => {
                            
                            return(
                                <TechTag key={tag} tag={tag}/>
                            )
                        })
                    }

                </CCardSubtitle>
                
                <CCardBody className="text-container">
                    <CCardText className="project-description">{description}</CCardText>
                </CCardBody>
                <CCardBody className="card-buttons">
                    <CButton className="github-button" href={gitUrl} target="_blank" rel="noopener noreferrer">
                        <CIcon icon={cibGithub} size='lg'/>
                        GitHub
                    </CButton>
                    {liveUrl &&(
                        <CButton className="demo-button" href={liveUrl} target="_blank" rel="noopener noreferrer" >
                        <CIcon icon={cilScreenDesktop} size='lg'/> 
                            Demo
                        </CButton>
                    )}
                </CCardBody>
            </CCard>
        </motion.div>
    )
}

export default Card; 