import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ButtonAdd,
  ButtonComprar,
  Container,
  DescriptionParagraph,
  NormalPrice,
  Price,
  ProductImage,
  ProductInfo,
  StrikedPrice,
  QuantityContainer,
  QuantityButton,
  SmallImage,
  ImageContainer,
  AdditionalInfo,
  SmallImagesContainer,
  TextHome,
  ArrowIcon
} from "./styles";
import { Product, products } from "./products";
import { CartProvider, useCart } from '../Cart/CartItems';


export const DetailsProduct = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { cartItems, setCartItems } = useCart(); // Usando o hook useCart para acessar o contexto do carrinho

  useEffect(() => {
    const getProductDetails = async (productId: number) => {
      const foundProduct = products.find((product) => product.id === Number(productId));
      setProduct(foundProduct || null);
      setSelectedImage(foundProduct?.image || null);
    };

    getProductDetails(Number(id));
  }, [id]);

  const [strikedPrice, normalPrice] = product?.price ? product.price.split(",") : ["", ""];

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const addToCart = () => {
    const itemIndex = cartItems.findIndex((item) => item.product.id === product?.id);
    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { product: product!, quantity, image: selectedImage!, price: product!.price.toString() }
      ]);
    }
    navigate("/carrinho");
  };


  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div>

      <Link to="/">
        <TextHome>Home <ArrowIcon>
        </ArrowIcon>   {product.name}
        </TextHome>
      </Link>

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

          <Price>
            <StrikedPrice>R$ {strikedPrice}</StrikedPrice>
            <NormalPrice>R$ {normalPrice}</NormalPrice>
          </Price>

          <DescriptionParagraph>{product.description}</DescriptionParagraph>
          <DescriptionParagraph>{product.moreDescriptionTwo}</DescriptionParagraph>
          <DescriptionParagraph>{product.moreDescriptionThree}</DescriptionParagraph>

          <label>Quantidade</label>
          <QuantityContainer>
            <QuantityButton onClick={decrementQuantity}>-</QuantityButton>
            <span>{quantity}</span>
            <QuantityButton onClick={incrementQuantity}>+</QuantityButton>
          </QuantityContainer>

          <ButtonAdd onClick={addToCart}>Adicionar ao Carrinho</ButtonAdd>
          <ButtonComprar>Comprar</ButtonComprar>
        </ProductInfo>

      </Container>
    </div>
  );
};
