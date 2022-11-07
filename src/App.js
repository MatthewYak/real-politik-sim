import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SelectCountry from './pages/SelectCountry';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-country" element={<SelectCountry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
