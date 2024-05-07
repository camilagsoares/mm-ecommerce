import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row; 
`;

export const SmallImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductImage = styled.div`
  flex: 1;
  margin-left: 20px; 
`;

export const AdditionalInfo = styled.div`
  margin-left: 20px; 
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px; 

  h2{
    font-size: 1.7rem;
  }

  label{
font-size: 14px;
}
`;

export const DescriptionParagraph = styled.p`
  margin-top: 10px;
  font-size: 1rem;
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
  margin-top: 10px; 

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
  margin-top: 10px; 

  &:hover {
    background-color: #5e625f;
  }
`;



export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 43px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  /* background-color: #ccc; */
  border-radius: 5px;
  border: none;
  margin: 0 12px;
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