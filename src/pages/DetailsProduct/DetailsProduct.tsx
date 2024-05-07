import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonAdd, ButtonComprar, Container, DescriptionParagraph, NormalPrice, Price, ProductImage, ProductInfo, StrikedPrice, QuantityContainer, QuantityButton, SmallImage, ImageContainer, AdditionalInfo, SmallImagesContainer } from "./styles";
import { Product, products } from "./products";


export const DetailsProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const getProductDetails = async (productId: number) => {


      const foundProduct = products.find(product => product.id === Number(productId));
      setProduct(foundProduct || null);
      setSelectedImage(foundProduct?.image || null);
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

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <ImageContainer>
        <SmallImagesContainer>
          {product.images.map((image, index) => (
            <SmallImage key={index} onClick={() => handleImageClick(image)}>
              <img src={image} alt={`Thumbnail ${index}`} />
            </SmallImage>
          ))}
        </SmallImagesContainer>
        <ProductImage>
          <img src={selectedImage ? selectedImage : undefined} alt={product.name} />
        </ProductImage>
      </ImageContainer>
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
