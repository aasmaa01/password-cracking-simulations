import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import BruteForce from './components/BruteForce';
import Dictionary from './components/Dictionary';
import Hydra from './components/Hydra';
import Rainbow from './components/Rainbow';
import './App.css'; 

//router configuration
 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bruteforce" element={<BruteForce />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/hydra" element={<Hydra />} />
        <Route path="/rainbow" element={<Rainbow />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;