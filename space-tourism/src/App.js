import Home from '../src/pages/Home';
import Destination from '../src/pages/Destination';
import Crew from '../src/pages/Crew';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </BrowserRouter>
  );
}