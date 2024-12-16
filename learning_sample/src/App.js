import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Arrowfunction from './Components/Arrow function';
// import Function from './ES6/Function';
// import Variable from './ES6/Variable';
// import './index.css';
import Login from '../src/Components/login';
import Form from '../src/Components/Form';
import Loginpage from '../src/Components/Loginpage';
import Handling from './Components/Handling';
import Conditional from './Components/Conditional';
import Memo from '../src/Components/Memo';
import List from '../src/Components/List';




function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/loginpage' element={<Loginpage/>}/>
      <Route path='/handling' element={<Handling/>}/>
      <Route path='/conditional' element={<Conditional/>}/>
      <Route path='/memo' element={<Memo/>}/>
      <Route path='/list' element={<List/>}/>
       
     
    
      
      
      
    
    
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;




