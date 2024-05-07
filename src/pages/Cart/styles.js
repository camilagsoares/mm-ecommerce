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
}
`;

export const CartInfo = styled.div`
  flex: 1;

  img{
    width: 100px;
    height: 100px;
  }
`;

export const OrderSummary = styled.div`
  flex: 0 0 300px;
  margin-left: 20px;
`;