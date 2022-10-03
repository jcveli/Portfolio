import ProjectCard from '../../components/project_cards/project_card.component';
import {ViewportSetting} from '../../utils/animation.js'
import { motion } from 'framer-motion'
import './projects.styles.scss'

const Project = () => { 

    const projects = [
        {
            "id": 1,
            'title':'Critix (Work in Progress)',
            'tech':'HTML & SCSS, JavaScript, React, Node.js, Express.js, Mongoose, MongoDB, BootStrap, Material UI',
            'description':"Social site for users to post and see reviews for movies from other users. Utilized the TMDB API to fetch movie details.",
            'gitUrl':"https://github.com/jcveli/critix/tree/main/client",
            'liveUrl':'',
            'imageUrl': 'https://i.imgur.com/AlxPwkO.png'
        },

        {
            "id": 2,
            'title':'Portfolio',
            'tech':'HTML & SCSS, JavaScript (JSX), React, CoreUI',
            'description':"Personal portfolio to showcase projects and personal links (where we are right now). Built with HTML, CSS, JavaScript and React.",
            'gitUrl':"https://github.com/jcveli/portfolio",
            'liveUrl':'https://jcveli.netlify.app/',
            'imageUrl': 'https://i.imgur.com/vUAOAZc.png'
        },

        {
            "id": 3,
            'title':'Brain Breeze',
            'tech':'JavaScript, React Native, React Native Paper',
            'description':"Team project to deliver a Duolingo-like experience for a client and their students. Assisted in frontend development and was team leader. Video demo presented by team member, Phuc.",
            'gitUrl':"https://github.com/NerdJS-Project/Front-End",
            'liveUrl':'https://www.youtube.com/watch?v=OR98go59_L4&ab_channel=PhucTruong',
            'imageUrl': 'https://i.imgur.com/4fwENHN.png'
        },

        {
            "id": 4,
            'title':'The Path',
            'tech':'Java, Codenameone framework, Eclipse',
            'description':"A game called The Path is written in Java using the Codename One framework. Submitted for CSC 133 (Object-Oriented Computer Graphics Programming) class.",
            'gitUrl':"https://github.com/jcveli/thePathGame",
            'liveUrl':'',
            'imageUrl': 'https://media.cheggcdn.com/media/d53/d535ce9a-4535-4e56-bd8e-81300a25a4f7/php4KwLCz'
        },
        
     
    ]


    return (
        <div className='projects' id='projects'>
            <motion.section 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={ViewportSetting}
                transition={{
                    delay: 0.3
                }}
            className='project-subtitles' >
                <h1>Projects</h1>
                <p>You can find more projects in my GitHub.</p>
            </motion.section>
            <ProjectCard Projects={projects}/>
           
        </div>
    )
}


export default Project; 