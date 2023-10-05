import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Home from './features/home/Home';
import Users from './features/users/Users';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
