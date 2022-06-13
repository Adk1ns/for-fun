import './App.css'
// import 'bootswatch/dist/sandstone/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import GlobalStyles from './Components/GlobalStyles/GlobalStyles'
import Nav from './Components/Header/Nav'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'
import ColorTools from './Components/ColorTools/ColorTools'
import Resources from './Pages/Resources'

function App() {
	return (
		<GlobalStyles>
			<header className=''>
				<Nav />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='Resources' element={<Resources />} />
					<Route path='ColorTools' element={<ColorTools />} />
					<Route path='Login' element={<p>Log the in</p>} />
				</Routes>
			</main>
			<Footer />
		</GlobalStyles>
	)
}

export default App
