import './App.css';
import Login from './Login';
import {BrowserRouter, Routes,Route } from 'react-router-dom'; 
import User from './User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
         <Route index element={<Login/>} />
         <Route path="/info" element={<User/>} />
         
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
