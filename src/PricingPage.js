import React from 'react';
import './PricingPage.css';
import flower1 from './image/flower1.png';

function PricingCard({ title, description, price, buttonText, flower }) {
  return (
    <div className="pricing-card">
      {flower && (
        <img
          src={flower.src}
          alt="flower"
          className={`flower ${flower.className}`}
        />
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <div className="card-description">{description}</div>
        {price && <div className="price">{price}</div>}
      </div>
      <button className="signup-button">{buttonText}</button>
    </div>
  );
}

function PricingPage() {
  const pricingOptions = [
    {
      title: "ИНДИВИДУАЛЬНОЕ УЧАСТИЕ",
      description: (
        <>
          <p>ДЕТИ (6-12 ЛЕТ) - 800 ₽</p>
          <p>ВЗРОСЛЫЕ (13+ ЛЕТ) - 1 200 ₽</p>
        </>
      ),
      price: "",
      buttonText: "ЗАПИСАТЬСЯ",
    },
    {
      title: "КОМАНДНОЕ УЧАСТИЕ",
      description: (
        <>
          <p>ДЕТСКАЯ КОМАНДА - 2 000 ₽</p>
          <p>ВЗРОСЛАЯ КОМАНДА - 3 000 ₽</p>
        </>
      ),
      price: "",
      buttonText: "ЗАПИСАТЬСЯ",
    },
    {
      title: "СЕМЕЙНЫЙ ПАКЕТ",
      description: "2 взрослых + 2 ребенка",
      price: "3 500 ₽",
      buttonText: "ЗАПИСАТЬСЯ",
    }
  ];

  return (
    <div className="pricing-page">
      <h1 className='price-title'>Стоимость</h1>
      <div className="pricing-cards-container">
        {pricingOptions.map((option, index) => {
          const flowerPosition = index % 2 === 0 ? 'left-flower' : 'right-flower';
          const flower = {
            src: flower1,
            className: `yellow ${flowerPosition}`
          };

          return (
            <PricingCard
              key={index}
              title={option.title}
              description={option.description}
              price={option.price}
              buttonText={option.buttonText}
              flower={flower}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PricingPage;
