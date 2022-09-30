import videoBg from '../../assets/video/lofi_room_animation.mp4'
import AnimatedText from '../animated-text/animated-text.component'
import './welcome.styles.scss'

const Welcome = () => {
    const texts = [
        {
            'id': 1,
            'message': 'Hello World!',
            'className': ''
        },
        {
            'id': 2,
            'message': 'Jerald Velicaria',
            'className': 'name'
        },
        {
            'id': 3,
            'message': 'Web Developer',
            'className': 'role'
        },
    ];


    return (
        <div className='welcome-container'>
                <video src={videoBg} autoPlay loop muted playsInline />
                <AnimatedText texts={texts}/>
        </div>
    )
}

export default Welcome;