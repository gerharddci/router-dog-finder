import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dogs from './routes/Dogs';
import Dog from './routes/Dog';

import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="dogs" element={<Dogs />}>
        <Route path=":name" element={<Dog />} />
      </Route>
      <Route path="*" element={<Dogs />} />
    </Routes>
    </div>
  );
}

export default App;
