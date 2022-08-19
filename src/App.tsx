import { AuthProvider } from './contexts/AuthContext';
import { HeaderProvider } from './contexts/HeaderContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppBase from './components/AppBase';
import AuthBase from './components/AuthBase';
import Instructors from './pages/Instructors';

import Home from './pages/Home';
import Login from './pages/Login';
import Plans from './pages/Plans';
import Register from './pages/Register';
import Requests from './pages/Requests';
import React from 'react';

export default function App() {
	return (
		<AuthProvider>
			<HeaderProvider>
				<Router>
					<Routes>
						<Route path='/' element={<AuthBase />}>
							<Route path='/' element={<Login />} />
							<Route path='/register' element={<Register />} />
						</Route>
						<Route path='app' element={<AppBase />}>
							<Route path='/app/home' element={<Home />} />
							<Route path='/app/plans' element={<Plans />} />
							<Route path='/app/requests' element={<Requests />} />
							<Route
								path='/app/instructors/:instructorId'
								element={<Instructors />}
							/>
							<Route path='/app/*' element={<div>Pagina não encontrada</div>} />
						</Route>
						<Route path='*' element={<div>Pagina não encontrada</div>} />
					</Routes>
				</Router>
			</HeaderProvider>
		</AuthProvider>
	);
}
