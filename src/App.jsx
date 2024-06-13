import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DiagModel from './components/DiagModel';
import CalModel from './components/CalModel';
import DietPlanner from './components/DietPlanner';

export default function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/DiagModel" element={<DiagModel />} />
          <Route path="/CalModel" element={<CalModel />} />
          <Route path="/DietPlanner" element={<DietPlanner />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
