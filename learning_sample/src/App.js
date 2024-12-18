import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Arrowfunction from './Components/Arrow function';
// import Function from './ES6/Function';
// import Variable from './ES6/Variable';
// import './index.css';
// 
// 
// 
// 
// 
// 
import Login from '../src/Components/login';
import Form from '../src/Components/Form';
import Loginpage from '../src/Components/Loginpage';
import Handling from './Components/Handling';
import Conditional from './Components/Conditional';
import Memo from '../src/Components/Memo';
import List from '../src/Components/List';
import Rounter from '../src/Components/Rounter';
import Dyanamic from './Components/Dyanamic';
import Home from './Components/Home';
import About from './Components/About';
import Mail from './Components/Mail'; 






function App() {
  return (
    <>
    <BrowserRouter>
    <Rounter/>
    <Routes>
      
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/loginpage' element={<Loginpage/>}></Route>
      <Route path='/handling' element={<Handling/>}></Route>
      <Route path='/conditional'element={<Conditional/>}></Route>
      <Route path='/memo' element={<Memo/>}></Route>
      <Route path='/list' element={<List/>}></Route>
      <Route path='/rounter' element={<Rounter/>}> </Route>
      <Route path='/dynamic/:userName' element={<Dyanamic/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/mail' element={<Mail/>}></Route>
      
     


      

    
       
     
    
      
      
      
    
    
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;




