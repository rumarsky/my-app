import React from 'react';
import './PricingPage.css';
import flowerImage1 from './assets/flowerVar1.png';
import flowerImage2 from './assets/flowerVar2.png';
import flowerImage3 from './assets/flowerVar3.png';

const BUTTON_TEXT = "ЗАПИСАТЬСЯ";

const FLOWER_IMAGES = [
  { src: flowerImage1, color: 'yellow' },
  { src: flowerImage2, color: 'pink' },
  { src: flowerImage3, color: 'blue' }
];

function PricingCard({ title, description, buttonText = BUTTON_TEXT, flower }) {
  return (
    <div className="pricing-card" role="region" aria-label={`Тариф ${title}`}>
      {flower && (
        <img
          src={flower.src}
          alt="Декоративный цветок"
          className={`flower ${flower.className}`}
          aria-hidden="true"
        />
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <div className="card-description">{description}</div>
      </div>
      <button className="signup-button" aria-label={`Записаться на ${title}`}>
        {buttonText}
      </button>
    </div>
  );
}

function PricingPage() {
  const pricingOptions = [
    {
      id: 'individual',
      title: "В ОДИНОЧКУ",
      description: (
        <>
          <p>ДЕТИ (6-12 ЛЕТ) - 800 ₽</p>
          <p>ВЗРОСЛЫЕ (13+ ЛЕТ) - 1 200 ₽</p>
        </>
      )
    },
    {
      id: 'team',
      title: "КОМАНДА",
      description: (
        <>
          <p>ДЕТСКАЯ КОМАНДА - 2 000 ₽</p>
          <p>ВЗРОСЛАЯ КОМАНДА - 3 000 ₽</p>
        </>
      )
    },
    {
      id: 'family',
      title: "СЕМЬЯ",
      description: (
        <>
          <p>2 ВЗРОСЛЫХ + 2 РЕБЕНКА - 3 500 ₽</p>
          <p>2 ВЗРОСЛЫХ + 1 РЕБЕНОК - 3 000 ₽</p>
        </>
      )
    }
  ];

  return (
    <div className="pricing-page">
      <h1 className='price-title'>Стоимость</h1>
      <div className="pricing-cards-container">
        {pricingOptions.map((option, index) => {
          const flowerPosition = index % 2 === 0 ? 'left-flower' : 'right-flower';
          const flowerType = FLOWER_IMAGES[index % FLOWER_IMAGES.length];
          const flower = {
            src: flowerType.src,
            className: `${flowerType.color} ${flowerPosition}`
          };

          return (
            <PricingCard
              key={option.id}
              title={option.title}
              description={option.description}
              flower={flower}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PricingPage;