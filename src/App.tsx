import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'
import axios, { AxiosResponse } from 'axios';
import Header from './components/sections/Header';
import Sidebar from './components/sections/Sidebar';
import Home from './components/home/Home';
import Register from './components/home/Register';
import EventScheduler from './components/home/EventScheduler';


const url = "http://localhost:8080"

function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export default function App() {
	const [authenticated, setAuthenticated] = React.useState(false);
	const navigate = useNavigate();

	async function login(user: { email: string, password: string }) {
		console.log("Loggin in...");
		console.log(user);

		let response!: AxiosResponse;
		await axios.post(`${url}/auth/login`, user).then((result) => response = result).catch((error) => response = error.response);
		console.log(response);

		if(response.status === 200) {
			setAuthenticated(true);
			navigate("/dashboard");
		}
		
		return response;
	}

	return (
		<>
			<Sidebar />
			<Stack width="100%" height="100%">
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
