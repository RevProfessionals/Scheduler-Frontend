import { Routes, Route } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import Header from './components/sections/Header';
import Sidebar from './components/sections/Sidebar';
import Home from './components/home/Home';
import Register from './components/home/Register';
import Login from './components/home/Login';

export default function App() {
  return (
    <>
      <Sidebar />
      <Stack sx={{ width: "100%", height: "100%" }}>
        <Header />
        <Stack sx={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Stack>
      </Stack>
    </>
  );
};
