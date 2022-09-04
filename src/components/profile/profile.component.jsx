import './profile.styles.scss'
import picture from '../../assets/image/profile.jpg'


const Profile = () => {
    return (
        <div className="profile-container">
            <img src={picture} alt="Profile"/>
        </div>
    )

}

export default Profile; 