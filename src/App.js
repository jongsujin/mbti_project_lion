import logo from './logo.svg';
import React from 'react';
import {useState} from 'react';
import './App.css';
import {Routes,Route,Link, useNavigate, Outlet} from 'react-router-dom';
import ResultPage from './pages/resultPage';
import HomePage from './pages/homePage';
function App() {
  let navigate = useNavigate();
 
 /*  let [btn_clicked, setBtnColor] = useState(''); */
  return (
    <div className="App">
       <div className="header">
        <h3>MBTI</h3>
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/result" element={<ResultPage/>}/>
      </Routes>
      <div className="footer">
        <h3>MBTI</h3>
      </div>

    </div>

   
  );
}

export default App;
