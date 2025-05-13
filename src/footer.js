import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>ООО “ПОЛЕТАЕМ”</p>
        <p>ИНН 1213141516</p>
        <p>РФ, Приморский край, г. Владивосток, Ладыгина 3</p>
        <p>+7 (914) 123-45-67</p>
      </div>
      <button className="up-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Наверх ↑
      </button>
    </footer>
  );
};

export default Footer;