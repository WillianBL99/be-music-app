import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthBase from './components/AuthBase';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path='/' element={<AuthBase />}>
						<Route path='/' element={<Login />} />
						<Route path='/register' element={<Register />} />
					</Route>
				</Routes>
			</Router>
		</AuthProvider>
	);
}
