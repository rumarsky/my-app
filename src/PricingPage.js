import React from 'react';
import './PricingPage.css';

function PricingCard({ title, description, price, buttonText }) {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price">{price}</div>
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
      buttonText: "ЗАПИСАТЬСЯ"
    },
    {
      title: "КОМАНДНОЕ УЧАСТИЕ (ОТ 3 ЧЕЛОВЕК)",
      description: (
        <>
          <p>ДЕТСКАЯ КОМАНДА - 2 000 ₽</p>
          <p>ВЗРОСЛАЯ КОМАНДА - 3 000 ₽</p>
        </>
      ),
      price: "",
      buttonText: "ЗАПИСАТЬСЯ"
    },
    {
      title: "СЕМЕЙНЫЙ ПАКЕТ",
      description: "2 взрослых + 2 ребенка",
      price: "3 500 ₽",
      buttonText: "ЗАПИСАТЬСЯ"
    }
  ];

  return (
    <div className="pricing-page">
      <h1>Стоимость</h1>
      <div className="pricing-cards-container">
        {pricingOptions.map((option, index) => (
          <PricingCard
            key={index}
            title={option.title}
            description={option.description}
            price={option.price}
            buttonText={option.buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default PricingPage;