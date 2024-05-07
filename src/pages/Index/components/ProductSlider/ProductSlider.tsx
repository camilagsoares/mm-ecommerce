// Em ProductSlider.tsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import './style.css'
import { Link } from 'react-router-dom';

interface Product {
  id: number; // Adicione uma propriedade "id" única para cada produto
  name: string;
  description: string;
  image: string;
}

const ProductSlider: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'MMS - STARTER HIGH', description: '45.000.00,35.000.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp' },
    { id: 2, name: 'MMS - STARTER MEDIUM', description: '17.400.00,13.500.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp' },
    { id: 3, name: 'MMS - STARTER BASIC', description: '10.400.00,8.000.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp' },
  ];

  const formatDescription = (description: string) => {
    const [price1, price2] = description.split(',');

    const formattedPrice1 = price1.trim().replace('.', ',');
    const formattedPrice2 = price2.trim().replace('.', ',');

    return (
      <div className="price">
        <span style={{ textDecoration: 'line-through' }}>R${formattedPrice1}</span>
        <span>R${formattedPrice2}</span>
      </div>
    );
  };

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  if (isMobile) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-slide">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{formatDescription(product.description)}</p>
          </div>
        ))}
      </Slider>
    );
  } else {
    return (
      <div className='align-center'>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product">
              <Link to={`/produto/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <div className='text-position'>
                  <h3>{product.name}</h3>
                  <p>{formatDescription(product.description)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ProductSlider;
