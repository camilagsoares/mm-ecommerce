import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px; /* Reduzir o padding para dispositivos móveis */
  background: linear-gradient(to right, #13305E, #31504E);
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.1);
  height: auto; /* Definir a altura como automática */

  @media (min-width: 769px) {
    height: 800px;
    flex-direction: row; /* Alterado para row para posicionar os elementos na mesma linha */
    align-items: center; /* Alinhar os itens ao centro */
    padding: 70px; /* Restaurar o padding para telas maiores */
  }
`;

const Menu = styled.nav`
  display: none; /* Ocultar o menu em dispositivos móveis */

  @media (min-width: 769px) {
    display: block; /* Exibir o menu em telas maiores */
    text-align: center;
    margin-bottom: 20px;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;

      li {
        margin: 0 10px;
        color: #fff;
        font-weight: 500;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
          color: #88bb76;
        }
      }
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 769px) {
    text-align: left; /* Alinhar o texto à esquerda */
    margin-right: 20px; /* Adicionar margem à direita para separar da imagem */
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
  font-family: 'Inter';
  text-transform: uppercase;
  font-weight: 700;

  @media (min-width: 769px) {
    font-size: 67px;
  }
`;

const GreenText = styled.span`
  font-weight: 700;
  color: #88BB76;
`;

const Subtitle = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: 'Inter';
  text-transform: uppercase;
  margin-bottom: 20px;

  @media (min-width: 769px) {
    text-align: left; /* Alinhar o texto à esquerda */
  }
`;

const Logo = styled.img`
  width: 100%; /* Definir a largura como 100% para ocupar o espaço disponível */
  max-width: 300px; /* Definir uma largura máxima para a imagem em dispositivos móveis */
  height: auto; /* Manter a proporção da imagem */
  margin-bottom: 20px;

  @media (min-width: 769px) {
    margin-bottom: 0; /* Remover margem inferior em telas maiores */
    max-width: none; /* Remover a largura máxima em telas maiores */
    width: auto; /* Permitir que a imagem tenha sua largura natural em telas maiores */
  }
`;

const Header = () => {
  return (
    <Container>
      {/* <Menu>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Produtos</a></li>
          <li><a href='/sobre-nos'>Sobre Nós</a></li>
        </ul>
      </Menu> */}
      <TextContainer>
        <Title>
          <GreenText>Soluções sustentáveis</GreenText> em energia solar.
        </Title>
        <Subtitle>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </Subtitle>
      </TextContainer>
      <Logo src="https://i.ibb.co/MNHW2R7/Agrupar-1-copiar-2.png" alt="Logo" />
    </Container>
  );
};

export default Header;
