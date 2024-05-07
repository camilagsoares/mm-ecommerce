import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";

export const Container = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: linear-gradient(to bottom right, #051b3b, #234b8d 50%, #7cac71 100%);
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.1);
  height: auto; 
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    height: auto; 
  }
`;


export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 90px;
  margin-top: 45px; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  @media (min-width: 769px) {
    padding: 20px 200px;
  }
`;

export const Logo = styled.img`
  height: 73px; 
  width: 215px;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px; 
    cursor: pointer; 
  }
`;



export const Menu = styled.nav`
  text-align: center;
  background: transparent;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  li {
    margin: 0 20px; 
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
      margin: 10px 0;
    }

    &:hover {
      color: #88BB76;
    }
  }
`;


export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 100%;
margin-top: 20px;

@media (min-width: 769px) {
  text-align: left;
  width: calc(50% - 20px);
  margin-right: 20px;
  align-items: flex-start; 
  order: 1; 
}
`;

export const ImageContainer = styled.div`
  width: 100%;
  order: 2; 

  @media (min-width: 769px) {
    max-width: calc(50% - 10px);
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 5.5rem;
  margin-bottom: 10px;
  font-family: 'Inter';
  text-transform: uppercase;
  font-weight: 700;
  align-self: flex-start; 

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 796px) and (max-width: 915px) {
    font-size: 3rem;

  }

`;


export const GreenText = styled.span`
  font-weight: 900;
  color: #88BB76;
`;

export const Subtitle = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: 'Inter';
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: left; 
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;


export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;


  @media only screen and (min-width : 1400px) {
  margin-left: 160px; 
  margin-right: 20px; 
}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  @media (min-width: 769px) and (max-width: 1406px) {
    flex-direction: column;
    align-items: center;
  }
`;



export const CentralizedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;



export const BoxBlack = styled.div`
  width: 100%;
  height: 90px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center; 
  align-items: center; 

  h1 {
    margin: 0; 
    margin-left: 10px; 
  }
`;

export const CentralizedText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    margin-top: 20px;
  }
`;

export const ArrowIcon = styled(MdArrowForwardIos)`
cursor: pointer;
`