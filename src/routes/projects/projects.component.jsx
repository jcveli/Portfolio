import ProjectCard from '../../components/project_cards/project_card.component'
import { motion } from 'framer-motion'
import './projects.styles.scss'

const Project = () => { 

    const projects = [
        {
            "id": 1,
            'title':'Critix',
            'tech':'HTML & SCSS, JavaScript, React, Node.js, Express.js, Mongoose, MongoDB',
            'description':"Social site for users to post and see reviews for movies from other users.",
            'gitUrl':"https://github.com/jcveli/critix/tree/main/client",
            'liveUrl':'',
            'imageUrl': ''
        },

        {
            "id": 2,
            'title':'Portfolio',
            'tech':'HTML & SCSS, JavaScript (JSX), React, CoreUI',
            'description':"Personal portfolio to showcase projects and personal links (where we are right now). Built with HTML, CSS, JavaScript and React.",
            'gitUrl':"https://github.com/jcveli/portfolio",
            'liveUrl':'https://jcveli.netlify.app/',
            'imageUrl': 'https://i.imgur.com/U9Kf5Ng.png'
        },

        {
            "id": 3,
            'title':'Brain Breeze',
            'tech':'JavaScript, React Native, React Native Paper',
            'description':"Team project to deliver a Duolingo-like experience for a client and their students. Assisted in frontend development and was team leader.",
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
            'imageUrl': ''
        },
        
     
    ]


    return (
        <motion.div
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}}
        >
            <div className='projects'>
                <div className='project-subtitles'>
                    <h1>PROJECTS</h1>
                    <p>You can find more projects in my GitHub.</p>
                </div>
                <ProjectCard Projects={projects}/>
            </div>
        </motion.div>
    )
}


export default Project; 