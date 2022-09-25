import ProjectCard from '../../components/project_cards/project_card.component'
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
            'title':'E-Commerce site',
            'tech':'HTML & SCSS, JavaScript (JSX), React, CoreUI',
            'description':"E-Commerce site for selling clothes.",
            'gitUrl':"https://github.com/jcveli/portfolio",
            'liveUrl':'',
            'imageUrl': ''
        },
        
     
    ]


    return (
        <div className='projects'>
            <div className='project-subtitles'>
            <h1>Project</h1>
            <p>You can find more projects in my GitHub.</p>
            </div>
            <ProjectCard Projects={projects}/>
        </div>
    )
}


export default Project; 