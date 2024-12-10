import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar/>
      {location.pathname === '/' ? <Home/> : <Outlet/>}
      <Footer/>
    </div>
  );
}

export default App;
