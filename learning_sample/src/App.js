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
// import Memo from '../src/Components/Memo';
import List from '../src/Components/List';
import Rounter from '../src/Components/Rounter';
import Dyanamic from './Components/Dyanamic';
import Home from './Components/Home';
import About from './Components/About'; 
import Mainmemo from './Components/Mainmemo';
import Props from './Components/Props';
import Login2 from './Hooks/Login2';
import Useeffect from './Hooks/Useeffect';
import Context from './Components/Context';
import Register from './Hooks/Register';
import Data from './Hooks/Data';
import Reg from './Hooks/Reg';
import Formik from './Hooks/Formik';
import Table from './Hooks/Table';
import Material from './Hooks/Material';







function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Rounter/> */}
    <Routes>
      
      <Route path='/login' element={<Login/>}></Route> 
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/loginpage' element={<Loginpage/>}></Route>
      <Route path='/handling' element={<Handling/>}></Route>
      <Route path='/conditional'element={<Conditional/>}></Route>
      {/* <Route path='/memo' element={<Memo/>}></Route> */}
      <Route path='/list' element={<List/>}></Route>
      <Route path='/rounter' element={<Rounter/>}> </Route>
      <Route path='/dynamic/:userName' element={<Dyanamic/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/mainmemo' element={<Mainmemo/>}></Route>
      <Route path='/props' element={<Props/>}></Route>
      <Route path='/login2' element={<Login2/>}></Route>
      <Route path='/useeffect' element={<Useeffect/>}></Route> 
      <Route path='/context' element={<Context/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/data' element={<Data/>}></Route>
      <Route path='/reg' element={<Reg/>}></Route>
      <Route path='/Formik' element={<Formik/>}></Route>
      {/* <Route path='/table' element={<Table/>}></Route> */}
        <Route path='/material' element={<Material/>}></Route>
      
</Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;




