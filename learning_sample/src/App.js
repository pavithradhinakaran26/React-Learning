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


import Register from './Hooks/Register';
import Data from './Hooks/Data';
import Reg from './Hooks/Reg';
import Formik from './Hooks/Formik';

import Material from './Hooks/Material';
import Context from './Components/Context';
import Container from './Components/Container';
import Usecontext from './Components/Usecontext';
import UseRef from './Components/UseRef';
import Reducer from './Components/Reducer';
// import City from './Hooks/City';
import Country from './Hooks/Country';

import State from './Hooks/State';
import Registerforms from './Hooks/Registerforms';
import Citycontext from './Hooks/Citycontext';
import Tablec from './Hooks/Tablec';
import Login from './Hooks/Login';




function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Rounter/> */}
    <Routes>
      
      
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
     
      <Route path='/context' element={<Context/>}></Route>
      {/* <Route path='/register' element={<Register/>}></Route> */}
      <Route path="/Register/:id?" element={<Register />} />

      <Route path='/data' element={<Data/>}></Route>
      <Route path='/reg' element={<Reg/>}></Route>
      <Route path='/Formik' element={<Formik/>}></Route>
      {/* <Route path='/table' element={<Table/>}></Route> */}
        <Route path='/material' element={<Material/>}></Route>
        <Route path='/Container' element={<Container/>}></Route>
        <Route path='/usecontext' element={<Usecontext/>}></Route>
        <Route path='/useref' element={<UseRef/>}></Route>
        <Route path='/reducer' element={<Reducer/>}></Route>
        {/* <Route path='/city' element={<City/>}></Route> */}
        <Route path='/country' element={<Country/>}></Route>
        <Route path='/state' element={<State/>}></Route>
        <Route path='/registerforms' element={<Registerforms/>}></Route>
        <Route path='/citycontext' element={<Citycontext/>}></Route>
        <Route path='/tablec' element={<Tablec/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
</Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;




