import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';

// GitHub Pages 子路径部署时使用 basename
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function App() {
  return (
    <Router basename={basePath || '/'}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
