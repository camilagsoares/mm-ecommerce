import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CustomerInfoContainer = styled.div`
  flex: 1;
  padding-right: 20px;
`;

export const ProductInfoContainer = styled.div`
  flex: 1;
  padding-left: 20px;
  background-color: #F0F0F0;

  img {
    width: 100px;
    height: 100px;
  }

  h3 {
    font-family: 'Inter';
    font-size: 1.4rem;
  }
`;

export const InputField = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #b5b0b0; 
  border-radius: 4px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-family: 'Inter';
  font-size: 13px;
  color: #43464a;

`;

export const LabeledInputField = styled.div`
  margin-bottom: 10px;
`;

export const LabeledSelect = styled.div`
  margin-bottom: 10px;
`;
