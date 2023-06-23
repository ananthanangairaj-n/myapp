import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Skill from './pages/Skill';
import Connect from './pages/Connect';
import Navbar from './components/Navbar';
import Three from './components/Three';


function App() {
  return (
    <>
   <BrowserRouter>
         <Navbar />
   <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/skill' element={<Skill/>} />
        <Route path='/studies' element={<Experience/>} />
        <Route path='/connect' element={<Connect/>} />
        <Route path='/three' element={<Three />} />

   </Routes>
   </BrowserRouter>
  {/* <div>
    <Home />
    <Skill/>
    
    <Experience/>

    <Connect/>

  </div> */}
  </>
  );
}

export default App;
