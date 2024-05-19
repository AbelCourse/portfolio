import React, { useEffect, useState } from 'react';
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';

import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Skill from './pages/Skillset';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/PreLoader';
import ScrollToTop from './components/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';

function App() {
	const [load, upadateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			<Preloader load={load} />
			<div
				className='App'
				id={load ? 'no-scroll' : 'scroll'}>
				<Navbar />
				<ScrollToTop />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/skillset'
						element={<Skill />}
					/>
					{/* <Route path="/project" element={<Project />} /> */}
					<Route
						path='/resume'
						element={<Resume />}
					/>
					<Route
						path='/contact'
						element={<Contact />}
					/>
					<Route
						path='*'
						element={<Navigate to='/' />}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
