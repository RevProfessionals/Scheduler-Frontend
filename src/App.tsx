import { Routes, Route } from 'react-router-dom'
import { Stack } from '@mui/material'
import Header from './components/sections/Header';
import Sidebar from './components/sections/Sidebar';
import Home from './components/home/Home';
import Register from './components/home/Register';

function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export default function App() {
	async function login() {
		await sleep(1000);
	}

	return (
		<>
			<Sidebar />
			<Stack>
				<Header />
				<Stack sx={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<Routes>
						<Route path="/" element={<Home loginHandler={login} />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</Stack>
			</Stack>
		</>
	);
};
