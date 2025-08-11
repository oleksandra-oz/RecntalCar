import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CarDetails from './pages/CarDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Catalog />} />
      <Route path="/cars/:id" element={<CarDetails />} />
    </Routes>
  );
}

export default App;
