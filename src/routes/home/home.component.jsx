import Welcome from '../../components/welcome/welcome.component';
import About from '../about/about.component';
import Project from '../projects/projects.component';
import Contact from '../contact/contact.component';

import './home.styles.scss';

const Home = () => {
    return(
        
            <div className="app-container">
                <Welcome />    
                <About />
                <Project />
                <Contact />
            </div>
        
    )
   
}

export default Home;