import { CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { ViewportSetting } from '../../utils/animation';
import { motion } from 'framer-motion';
import './profile.styles.scss'
import picture from '../../assets/image/profile.jpg'
import { cilDescription } from '@coreui/icons';


const Profile = () => {
	const imageAnimate = { 
		initial:{
			opacity: 0, 
			scale: 0.5, 
			x: -100
		},
		animate: {
			opacity: 1, 
			scale: 1, 
			x: 0,
			rotate:[ 65, 0]
		}

	}

    return (
		<div className="profile-container">
			
				<motion.img 
					initial={imageAnimate.initial}
					whileInView={imageAnimate.animate}
					viewport={ViewportSetting}
					transition={{
					duration: 0.8,
					delay: 0.3
					}}
					whileHover={{scale: 1.1}}
					src={picture} 
					alt="Profile"
				/>
				
				<motion.div
					initial={{opacity: 0, scale:0.5,y: 100}}
					whileInView={{ 
						opacity: 1, 
						scale: 1,
						y:0,
						transition:{
							delay:0.7
						}
					 }}
					viewport={ViewportSetting}
					whileHover={{scale: 1.2}} 
					whileTap={{scale: 0.8}}
				>
					<CButton 
					color="" 
					size="lg" 
					className='resume-button'
					target="_blank" rel="noopener noreferrer"
					href='https://docs.google.com/document/d/1VjIT1cG4M0l6m2oolj7HO5ZtpJf0wvXHQdwpbRxEYVA/edit?usp=sharing'
					>
					<CIcon icon={cilDescription} size='lg'/> View Resume
					</CButton>

				</motion.div>
			
			
		</div>
    )

}

export default Profile; 