import styled from "styled-components"



export const TitleBox = styled.h3`
  color: #265094;
  font-size: 1.2rem; 
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
  margin-bottom: 35px;
  

`;

export const TitlePrincipal = styled.div`
margin-top: 30px;

h1{
  font-weight: 700;
  font-family: 'Inter';
  font-size: 2.1rem;

  /* margin-bottom: 30px; */
}

@media (max-width: 600px) {
  h1{
  font-weight: 700;
  font-family: 'Inter';
  font-size: 1.5rem;
}
}

`