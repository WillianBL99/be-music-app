import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBase from './components/AppBase';
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
					<Route path='app' element={<AppBase />}>
						<Route path='/app/home' element={<Login />} />
						<Route path='/app/*' element={<div>Pagina não encontrada</div>} />
					</Route>
					<Route path='*' element={<div>Pagina não encontrada</div>} />
				</Routes>
			</Router>
		</AuthProvider>
	);
}
