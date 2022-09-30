import { CButton } from '@coreui/react';
import { motion } from 'framer-motion';
import './profile.styles.scss'
import picture from '../../assets/image/profile.jpg'


const Profile = () => {
    return (
		<motion.div
			initial={{opacity: 0, scale:0.5}}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
			  duration: 0.8,
			  delay: 0.2
			}}
		>
			<div className="profile-container">
				<img src={picture} alt="Profile"/>
				<motion.div
					whileHover={{scale: 1.2}} 
					whileTap={{scale: 0.8}}
				>
					<CButton color="" size="lg" className='resume-button'>
						<i className="cil-cloud-download icon icon-l"/> Resume
					</CButton>
				</motion.div>
			
			</div>
		</motion.div>
    )

}

export default Profile; 