import { CButton } from '@coreui/react';
import './profile.styles.scss'
import picture from '../../assets/image/profile.jpg'


const Profile = () => {
    return (
        <div className="profile-container">
            <img src={picture} alt="Profile"/>
            <CButton color="" size="lg" className='resume-button'>
                <i className="cil-cloud-download icon icon-l"/> Resume
            </CButton>
        </div>
    )

}

export default Profile; 