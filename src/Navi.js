import './App.css';
import { Login } from './login.js'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Addpost from './Addpost';
import Createuser from './Createuser';
import { createContext, useState } from 'react';
import ProtectedRoute from './Protectedroute';
import { Profile } from './Profile';

export const Appcontext = createContext();

function Navi() {
  const [userauth,setuserauth] = useState({});
  return (
    <div className='App-login'> 
    <Appcontext.Provider value={{userauth,setuserauth}}>
    <Router>
    <Routes>
      <Route path='/' element={ <Login /> }/>
      <Route path='/home' element={<Home/>} />
      <Route path='/createuser' element={<Createuser/>} />
      <Route element={<ProtectedRoute/>}>
        <Route path='/Addpost' element={<Addpost/>} exact/>
        <Route path='/profile' element={<Profile />} excat />
      </Route>
    </Routes>
    </Router>
    </Appcontext.Provider>
    </div>
  );
}

export default Navi;