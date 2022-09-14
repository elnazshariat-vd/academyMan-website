import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages';
import Enter from './pages/auth/enter';
import Register from './pages/auth/register';
import Verify from './pages/auth/verify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="auth/enter" element={<Enter />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="auth/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
