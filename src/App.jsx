// App.jsx
import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import './components/Main.css';
import Variables from './components/Variables';
import Operaciones from './components/Operaciones';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/variables' element={<Variables />}/>
          <Route path='/operaciones' element={<Operaciones/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
