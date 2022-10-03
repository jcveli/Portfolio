import './App.scss';
import Home from './routes/home/home.component'
import Navbar from './components/navbar/navbar.component';

import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import '@coreui/coreui/dist/css/coreui.min.css'
import Footer from './components/footer/footer.component';

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<Navbar />
	
	
			
			<AnimatePresence initial={true} mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} /> 
				</Routes>
			</AnimatePresence>
			
			
			<Footer />
		</div>
	  );
 
}

export default App;
