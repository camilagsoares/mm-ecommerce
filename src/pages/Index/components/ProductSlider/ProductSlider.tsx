import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import './style.css'

interface Product {
  name: string;
  description: string;
  image: string;
}

const ProductSlider: React.FC = () => {
  const products = [
    { name: 'MMS - STARTER HIGH', description: '45.000.00,35.000.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp' },
    { name: 'MMS - STARTER MEDIUM', description: '17.400.00,13.500.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp' },
    { name: 'MMS - STARTER BASIC', description: '10.400.00,8.000.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp' },
    // Adicione mais produtos conforme necessário
  ];

  const formatDescription = (description: string) => {
    // Separa os preços considerando o padrão "valor1,valor2"
    const [price1, price2] = description.split(',');

    // Remove espaços em branco e formata os valores monetários
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
        {products.map((product, index) => (
          <div key={index} className="product-slide">
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
          {products.map((product, index) => (
            <div key={index} className="product">
              <img src={product.image} alt={product.name} />
              <div className='text-position'>
                <h3>{product.name}</h3>
                <p>{formatDescription(product.description)}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ProductSlider;
