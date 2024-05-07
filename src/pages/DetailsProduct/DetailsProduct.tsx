import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonAdd, ButtonComprar, Container, DescriptionParagraph, NormalPrice, Price, ProductImage, ProductInfo, StrikedPrice, QuantityContainer, QuantityButton } from "./styles";

interface Product {
  id: number;
  name: string;
  description: string;
  moreDescription: string
  moreDescriptionTwo?: string
  moreDescriptionThree?: string
  price: string;
  image: string;
}

export const DetailsProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const getProductDetails = async (productId: number) => {
      const products: Product[] = [
        { id: 1, name: 'MMS - STARTER HIGH', description: 'Produto de alta qualidade.', price: ' 45.000.00,35.000.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp' , moreDescription: 'Kit Bomba Solar Submersa 380V até 50m ou 75.950L/dia.', moreDescriptionTwo: 'Bomba solar de 14 estágios, 5CV com inversor externo.' },
        { id: 2, name: 'MMS - STARTER MEDIUM', description: 'Produto de qualidade média.', price: '17.400.00,13.500.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp', moreDescription: 'Kit Bomba Solar Submersa 2200W até 153m ou 11.000L/dia' , moreDescriptionTwo: 'Bomba solar de 37 estágios, 3CV com controlador externo MMS Starter.'},
        { id: 3, name: 'MMS - STARTER BASIC', description: 'Produto de qualidade básica.', price: '10.400.00,8.000.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp' , moreDescription: 'Kit Bomba Solar', moreDescriptionTwo: 'Submersa 1100W até 42m ou 23.000L/dia.' , moreDescriptionThree: 'Bomba solar de 13 estágios, 1CV com controlador externo MMS Starter.'},
      ];

      const foundProduct = products.find(product => product.id === Number(productId));
      setProduct(foundProduct || null);
    };

    getProductDetails(Number(id));
  }, [id]);

  const [strikedPrice, normalPrice] = product?.price ? product.price.split(',') : ['', ''];

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  if (!product) {
    return <div>Carregando...</div>;
  }

  return ( 
    <Container>
      <ProductImage>
        <img src={product.image} alt={product.name} />
      </ProductImage>
      <ProductInfo>
        <h2>{product.name}</h2>
        <DescriptionParagraph>{product.description}</DescriptionParagraph>
        <DescriptionParagraph>{product.moreDescriptionTwo}</DescriptionParagraph>
        <DescriptionParagraph>{product.moreDescriptionThree}</DescriptionParagraph>

        <Price>
          <StrikedPrice>R$ {strikedPrice}</StrikedPrice>
          <NormalPrice>R$ {normalPrice}</NormalPrice>
        </Price>

        <QuantityContainer>
          <QuantityButton onClick={decrementQuantity}>-</QuantityButton>
          <span>{quantity}</span>
          <QuantityButton onClick={incrementQuantity}>+</QuantityButton>
        </QuantityContainer>

        <ButtonAdd>Adicionar ao Carrinho</ButtonAdd>
        <ButtonComprar>Comprar</ButtonComprar>
      </ProductInfo>
    </Container>
  );
};
