import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  
h2 {
    font-size: 1.3rem;
}

hr { 
    margin-top: 10px;
    margin-bottom: 40px;
}
`;

export const CartInfo = styled.div`
  flex: 1;

  img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }

  .item-info {
    display: flex;
    align-items: center; 
  }

  .item-info-details {
    display: flex;
    flex-direction: column;
  }

  .item-info-details span {
    margin-bottom: 5px; 
  }

  .actions {
    margin-top: 20px; 
    align-self: flex-end; 
  }

  .btnAction:hover{
    color: #adaaaa;
  }
`;



export const OrderSummary = styled.div`
  flex: 0 0 300px;
  margin-left: 20px;

  .textCheckout {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }

  .textCheckout span {
    margin-left: 5px;
  }
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

export const InputContainer = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;

input[type="text"],
textarea {
  margin-top: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  resize: none;
  border-radius: 4px;
  width: 400px;
  font-size: 14px;
  outline: none;
}
`;

export const ActionContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const ButtonWithIcon = styled.button`
display: flex;
align-items: center;
text-align: center;
width: 320px;
height: 44px;
color: black;
transition: background-color 0.3s;
margin-top: 10px; 
border: none;
cursor: pointer;

&:hover {
  color: #a5a9a6;
}

svg {
  margin-right: 5px;
}
`;


export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 30px; 
  margin-top: 5px;
  width: 100px;
  margin-bottom: 5px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: none;
  margin: 0 5px; 
  cursor: pointer;
`;

export const QuantitySpan = styled.span`
  margin: 0 5px; 
`;