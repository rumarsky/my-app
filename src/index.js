import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PricingPage from './PricingPage';
import Calculator from './calculator';
import Footer from './footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('pricing-root'));
root.render(
  <React.StrictMode>
    <PricingPage />
    <Calculator />
    <div className="wave-separator-footer"></div> {}
    <Footer />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
