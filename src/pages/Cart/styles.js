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
    margin-right: 10px; /* Add margin to separate the image from the text */
  }

  .item-info {
    display: flex; /* Display title, price, and image in a row */
    align-items: center; /* Center items vertically */
  }

  .item-info-details {
    display: flex;
    flex-direction: column; /* Stack title and price vertically */
  }

  .item-info-details span {
    margin-bottom: 5px; /* Add margin between the title and price */
  }
`;


export const OrderSummary = styled.div`
  flex: 0 0 300px;
  margin-left: 20px;
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
