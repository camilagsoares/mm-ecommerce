import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row; /* Agora em linha para manter ProductImage e SmallImagesContainer lado a lado */
`;

export const SmallImagesContainer = styled.div`
  display: flex;
  flex-direction: column; /* Para manter os SmallImage em coluna vertical */
`;
export const ProductImage = styled.div`
  flex: 1;
  margin-right: 20px; /* Espaço entre a imagem principal e as imagens menores */
`;

export const AdditionalInfo = styled.div`
  margin-left: 20px; /* Espaço entre as imagens menores e as informações adicionais */
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px; /* Espaço entre as informações adicionais e as imagens */
`;

export const DescriptionParagraph = styled.p`
  margin-top: 10px;
  font-size: 1.4rem;
`;

export const Price = styled.p`
  margin-top: 10px;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const StrikedPrice = styled.span`
  text-decoration: line-through;
`;

export const NormalPrice = styled.span`
  margin-left: 10px;
`;

export const ButtonAdd = styled.button`
  background-color: #5e625f;
  text-align: center;
  width: 320px;
  height: 44px;
  color: white;
  transition: background-color 0.3s;
  margin-top: 10px; /* Espaço entre o botão Adicionar e o próximo botão */

  &:hover {
    background-color: #a5a9a6;
  }
`;

export const ButtonComprar = styled.button`
  background-color: black;
  text-align: center;
  width: 320px;
  height: 44px;
  color: white;
  transition: background-color 0.3s;
  margin-top: 10px; /* Espaço entre o botão Comprar e o próximo elemento */

  &:hover {
    background-color: #5e625f;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
`;

export const SmallImage = styled.div`
  margin-bottom: 10px;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
  }

  img:hover {
    border-color: #333;
  }
`;