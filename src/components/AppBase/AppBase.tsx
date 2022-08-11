import { Outlet } from 'react-router-dom';
import Header from '../Header';

function AppBase() {
	return (
		<div className='AppBase'>
			<Header />
			<h1>App base</h1>
			<Outlet />
		</div>
	);
}

export default AppBase;
