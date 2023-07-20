import { Routes, Route } from 'react-router-dom'
import Login from './components/home/Login';
import './App.css'
import Header from './components/sections/Header';
import Sidebar from './components/sections/Sidebar';

export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};
