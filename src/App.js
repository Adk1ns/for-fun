import './App.css'
// import 'bootswatch/dist/sandstone/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import GlobalStyles from './Components/GlobalStyles/GlobalStyles'
import Nav from './Components/Header/Nav'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'
import ColorTools from './Components/ColorTools/ColorTools'
import Resources from './Pages/Resources'
import Projects from './Pages/Projects'

function App() {
	return (
		<GlobalStyles className=''>
			<header className=''>
				<Nav />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='Resources' element={<Resources />} />
					<Route path='Samples' element={<Projects />} />
					<Route path='ColorTools' element={<ColorTools />} />
					<Route path='Login' element={<p>Log the in</p>} />
				</Routes>
			</main>
			<Footer />
		</GlobalStyles>
	)
}

export default App
