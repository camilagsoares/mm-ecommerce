import styled from "styled-components"



export const TitleBox = styled.h3`
  color: #265094;
  font-size: 1rem; 
  font-weight: 700;
  margin-bottom: 0;
  font-family: 'Inter';
`;

export const LineGreen = styled.div`
  height: 6px; 
  width: 50px;
  background-color: #88bb76;
`;


export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5%; 
  margin-right: 2%; 
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 10%; 
  
  @media (max-width: 768px) { 
    /* flex-direction: column;
    align-items: center;
    margin-left: 0; */
  }
`;