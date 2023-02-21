
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./Assets/main.css"
import Nav from './Component/Nav/Nav';
import Home from "./Pages/Home/Home";
import Person from './Pages/Person/Person';
import Popular from "./Pages/Popular/Popular";
import SingleMovie from './Pages/SingleMovie/SingleMovie';
import UpComing from './Pages/UpComing/UpComing';


function App() {
  return (
    <>
      <div className='moviesapp'>
        {/* <h1>The Movie App</h1> */}
        <Nav/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie' element={<Popular/>}/>
        <Route path='/up-coming' element={<UpComing/>}/>
        <Route path='/movie/:id' element={<SingleMovie/>}/>
        <Route path='/person:id' element={<Person/>}/>
      </Routes>
    </>
  );
}

export default App;
