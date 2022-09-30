import videoBg from '../../assets/video/lofi_room_animation.mp4'
import './welcome.styles.scss'

const Welcome = () => { 
    return (
        <div className='welcome-container'>
                <video src={videoBg} autoPlay loop muted playsInline />
                <div className='subtitle-container'>
                    <h1>Hello World!</h1>
                    <h1 className='name'>Jerald Velicaria</h1>
                    <h1 className='role'>Web Developer</h1>
                </div>
                
                
        </div>
    )
}

export default Welcome;