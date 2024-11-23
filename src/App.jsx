// App.jsx
import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import './components/Main.css';
import './components/Variables.css';



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VarNumericas from './components/VarNumericas';
import VarTexto from './components/VarTexto';
import VarBool from './components/VarBool';
import OpSuma from './components/OpSuma';
import OpResta from './components/OpResta';
import OpMulti from './components/OpMulti';
import OpDivi from './components/OpDivi';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/varnum' element={<VarNumericas />}/>
          <Route path='/varbool' element={<VarTexto/>}/>
          <Route path='/vartexto' element={<VarBool/>}/>

          <Route path='/opsuma' element={<OpSuma />}/>
          <Route path='/opresta' element={<OpResta/>}/>
          <Route path='/opmulti' element={<OpMulti/>}/>
          <Route path='/opdivi' element={<OpDivi/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
