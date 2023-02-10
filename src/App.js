import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './components/countries/Countries';
import Regions from './components/regions/Regions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:country" element={<Regions />} />
      </Routes>
    </Router>
  );
}

export default App;
