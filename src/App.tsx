import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthBase from './components/AuthBase';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<AuthBase />}>
					<Route path='/' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Route>
			</Routes>
		</Router>
	);
}
