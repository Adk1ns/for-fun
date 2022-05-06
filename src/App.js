// import './App.css'
// import 'bootswatch/dist/sandstone/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import GlobalStyles from './Components/GlobalStyles/GlobalStyles'
import Nav from './Components/Header/Nav'
import Home from './Pages/Home'

function App() {
	return (
		<GlobalStyles>
			<header className=''>
				<Nav />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='Resources' element={<p>Resources</p>} />
					<Route path='ColorTools' element={<p>color tools</p>} />
					<Route path='Login' element={<p>Log the fuck in</p>} />
				</Routes>
			</main>
		</GlobalStyles>
	)
}

export default App
