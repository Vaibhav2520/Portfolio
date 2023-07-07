import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/navbar";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Pages/home';





function App(props) {
  
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
