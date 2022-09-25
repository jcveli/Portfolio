import './App.css';
import Home from './routes/home/home.component'
import About from './routes/about/about.component';
import Project from './routes/projects/projects.component';
import Navbar from './components/navbar/navbar.component';
import Contact from './routes/contact/contact.component';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
		  <Route path='/' element={<Navbar />}>
			  <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
		  </Route>	
    </Routes>
  );
}

export default App;
