import Welcome from '../../components/welcome/welcome.component'
import About from '../about/about.component'
import Projects from '../projects/projects.component'
import Footer from '../../components/footer/footer.component'
import Contact from '../contact/contact.component'
const Home = () => {
    return(
        <div className="App">
           <Welcome /> 
           <About />
           <Projects />
           <Contact />
           <Footer />
           
        </div>
    )
   
}

export default Home;