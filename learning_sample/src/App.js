import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Arrowfunction from './Components/Arrow function';
// import Function from './ES6/Function';
// import Variable from './ES6/Variable';
// import './index.css';
import Login from '../src/Components/login';
import Form from '../src/Components/Form';
import Loginpage from '../src/Components/Loginpage';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/loginpage' element={<Loginpage/>}/>
      
    
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



