import React, { useState } from 'react';
import "./calculator.css"
const Calculator = () => {
  // Цена за взрослого и ребенка
  const ADULT_PRICE = 1200;
  const CHILD_PRICE = 800;

  // Состояния
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [customAdults, setCustomAdults] = useState('');
  const [customChildren, setCustomChildren] = useState('');

  // Общая сумма
  const totalPrice = (() => {
    let total = 0;
    if (adults > 0) 
        total += adults * ADULT_PRICE;
    if (children > 0) 
        total += children * CHILD_PRICE;
    if (customAdults) 
        total += parseInt(customAdults, 10) * ADULT_PRICE;
    if (customChildren) 
        total += parseInt(customChildren, 10) * CHILD_PRICE;
    return total;
  })();

  const discountedPrice = (() => {
    if (totalPrice > 0)
        return totalPrice - 500
    return totalPrice
  })();

  // Функции для обработки изменения количества
  const handleAdultChange = (e) => {
    const value = e.target.value;
    setAdults(Number(value));
    setCustomAdults(''); // Если выбрано значение, очистить кастомное
  };

  const handleChildChange = (e) => {
    const value = e.target.value;
    setChildren(Number(value));
    setCustomChildren(''); // Если выбрано значение, очистить кастомное
  };

  const handleCustomAdultsChange = (e) => {
    const val = e.target.value;
    setCustomAdults(val);
    setAdults(0); // Очистка стандартных радиокнопок
  };

  const handleCustomChildrenChange = (e) => {
    const val = e.target.value;
    setCustomChildren(val);
    setChildren(0); // Очистка стандартных радиокнопок
  };

  return (
    <div className="calculator-container">
      <div className="calculator-content">
        <h3>СКОЛЬКО БУДЕТ ВЗРОСЛЫХ?</h3>
        <div className="radio-group">
          <label>
            <input type="radio" value="1" checked={adults === 1} onChange={handleAdultChange} /> 1
          </label>
          <label>
            <input type="radio" value="2" checked={adults === 2} onChange={handleAdultChange} /> 2
          </label>
          <label>
            <input type="radio" value="3" checked={adults === 3} onChange={handleAdultChange} /> 3
          </label>
          <label>
            <input type="radio" value="4" checked={adults === 4} onChange={handleAdultChange} /> 4
          </label>
          <div className="custom-input">
            <span>БОЛЕЕ</span>
            <input
              type="number"
              min="0"
              placeholder="..."
              value={customAdults}
              onChange={handleCustomAdultsChange}
            />
          </div>
        </div>

        <h3>СКОЛЬКО БУДЕТ ДЕТЕЙ?</h3>
        <div className="radio-group">
          <label>
            <input type="radio" value="1" checked={children === 1} onChange={handleChildChange} /> 1
          </label>
          <label>
            <input type="radio" value="2" checked={children === 2} onChange={handleChildChange} /> 2
          </label>
          <label>
            <input type="radio" value="3" checked={children === 3} onChange={handleChildChange} /> 3
          </label>
          <label>
            <input type="radio" value="4" checked={children === 4} onChange={handleChildChange} /> 4
          </label>
          <div className="custom-input">
            <span>БОЛЕЕ</span>
            <input
              type="number"
              min="0"
              placeholder="..."
              value={customChildren}
              onChange={handleCustomChildrenChange}
            />
          </div>
        </div>

        <div className="price-display">
          <p>ВАША ЦЕНА:</p>
          <div className="price-values">
            <span className="total-price">{discountedPrice} ₽</span>
            <span className="discounted-price">{totalPrice} ₽</span>
          </div>
        </div>
      </div>

      <button className="signup-button">ЗАПИСАТЬСЯ</button>
    </div>
  );
};

export default Calculator;