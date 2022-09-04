import videoBg from '../../assets/video/lofi_room_animation.mp4'
import './welcome.styles.scss'

const Welcome = () => { 
    return (
        <div className='welcome-container'>
                <video src={videoBg} autoPlay loop muted playsInline />
                <div className='subtitle-container'>
                    <h1>Jerald Velicaria</h1>
                    <h2>Software Developer</h2>
                </div>
                
                
        </div>
    )
}

export default Welcome;