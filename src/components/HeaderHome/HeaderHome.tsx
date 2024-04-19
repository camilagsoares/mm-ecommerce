import React from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import backgroundImage from '../../assets/imagem.png';

const Container = styled.div`
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




const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Alinha os elementos verticalmente */
  width: 100%;
  padding: 20px 90px; /* Ajuste o espaçamento conforme necessário */
  margin-top: 20px; /* Ajuste para descer toda a linha */
`;

const Logo = styled.img`
  height: 50px; /* Ajuste conforme necessário */
`;

const Icon = styled(FiMenu)`
  font-size: 24px; /* Ajuste o tamanho do ícone conforme necessário */
  color: #fff;
  cursor: pointer;
`;

const Menu = styled.nav`
  text-align: center;
  background: transparent;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center; /* Alinha os itens verticalmente */
  }

  li {
    margin: 0 20px; /* Ajuste as margens conforme necessário */
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #88BB76;
    }
  }
`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%; 
  margin-top: 20px; 

  @media (min-width: 769px) {
    text-align: left; 
    width: 500px; 
    margin-right: 20px; 
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 67px;
  margin-bottom: 10px;
  font-family: 'Inter';
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 50px; 
  }
`;

const GreenText = styled.span`
  font-weight: 900;
  color: #88BB76;
`;

const Subtitle = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: 'Inter';
  text-transform: uppercase;
  margin-bottom: 20px;

  @media (min-width: 769px) {
    text-align: left; 
  }
`;

const Image = styled.img`
  width: 880px;
  height: auto;
  margin-top: 20px; /* Ajuste o valor conforme necessário */

  @media (max-width: 768px) {
    margin-top: 40px; /* Ajuste o valor conforme necessário para dispositivos móveis */
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Adicionado para afastar os elementos */
  width: 100%;
  margin-top: 40px; /* Ajuste o valor conforme necessário */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px; /* Ajuste o valor conforme necessário para dispositivos móveis */
  }
`;


const CentralizedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Header = () => {
  return (
    <Container>
      <MenuWrapper>
        <Logo src={logo} alt="Logo" />
        <Menu>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Produtos</a>
            </li>
            <li>
              <a href='/sobre-nos'>Sobre Nós</a>
            </li>
          </ul>
        </Menu>
        <Icon />

      </MenuWrapper>
      <ContentContainer>
        <CentralizedContainer>
          <TextContainer>
            <Title>
              <GreenText>Soluções sustentáveis</GreenText> em energia solar.
            </Title>
            <Subtitle><b>Deixe o sol pagar sua conta de energia!</b> Solicite um orçamento</Subtitle>
          </TextContainer>
        </CentralizedContainer>
        <Image src={backgroundImage} alt="Background" />
      </ContentContainer>
    </Container>
  );
};

export default Header;
