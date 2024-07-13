import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <Router>
        <div className="m-0 p-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
          </Routes>
        </div>
    </Router>
  );
};

export default App;
