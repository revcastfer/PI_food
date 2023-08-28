import './App.css';
import Login from './components/login.jsx'
import Home from './components/home.jsx'
import Detail from './components/detail.jsx'
import Cards from './components/cards.jsx'
import NewRecipe from './components/newRecipe.jsx'
import {  Routes,Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login/>}/>

          <Route path="/home" element={<Home/>} >
            <Route path="cards" element={<Cards/>}/>
            <Route path="new" element={<NewRecipe/>}/>
          </Route>
          <Route path="detail/:id" element={<Detail/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
