import Welcome from '../../components/welcome/welcome.component'
// import About from '../about/about.component'
// import Projects from '../projects/projects.component'
// import Footer from '../../components/footer/footer.component'
// import Contact from '../contact/contact.component'

import './home.styles.scss'

const Home = () => {
    return(
        <div className="app-container">
           <Welcome />    
        </div>
    )
   
}

export default Home;