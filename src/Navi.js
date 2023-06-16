import './App.css';
import App from './App';
import { Login } from './login.js'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function Navi() {
  return (
    <div className='App-login'> 
    <Router>
    <Routes>
      <Route path='/' element={ <Login /> }/>
      <Route path='/app' element={<App />}/>
  
    </Routes>
    </Router>
    </div>
  );
}

export default Navi;