import Welcome from '../../components/welcome/welcome.component';
import About from '../about/about.component';
import Project from '../projects/projects.component';
import Contact from '../contact/contact.component';
import Footer from '../../components/footer/footer.component';


const Home = () => {
    return(
        
            <div className="app-container">
                <Welcome />    
                <About />
                <Project />
                <Contact />
                <Footer />
            </div>
        
    )
   
}

export default Home;