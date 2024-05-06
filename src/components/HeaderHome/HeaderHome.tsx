import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import backgroundImage from '../../assets/imagem.png';
import { ArrowIcon, BoxBlack, CentralizedContainer, CentralizedText, Container, ContentContainer, GreenText, IconsContainer, Image, ImageContainer, Logo, Menu, MenuWrapper, Subtitle, TextContainer, Title } from './styles';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = styled.div<SidebarProps>`
width: 300px;
height: 100%;
background-color: #f0f0f0;
position: fixed;
top: 0;
right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
transition: right 0.3s ease;
`;


const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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

        <IconsContainer>
          <button onClick={toggleSidebar}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.375 2.57292C2.04708 2.57292 1.78125 2.83875 1.78125 3.16667C1.78125 3.49459 2.04708 3.76042 2.375 3.76042C3.02183 3.76042 3.58188 4.20967 3.7222 4.8411L4.06256 6.37276C4.06504 6.40995 4.07103 6.44713 4.08065 6.48382L4.12411 6.64971L4.17039 6.85797C4.17949 6.89891 4.19261 6.93792 4.20925 6.97467L5.53542 12.0364C5.96875 13.6903 7.4633 14.8438 9.17306 14.8438H13.2609C15.3377 14.8438 17.0213 13.1602 17.0213 11.0833V8.93846C17.0213 8.49206 16.9569 7.95346 16.654 7.47826C15.9725 6.40902 14.7836 5.73959 13.4832 5.73959H5.13833L4.88142 4.5835C4.62036 3.40874 3.57841 2.57292 2.375 2.57292Z" fill="white" />
              <path d="M14.25 16.625C14.25 17.0622 13.8956 17.4167 13.4583 17.4167C13.0211 17.4167 12.6667 17.0622 12.6667 16.625C12.6667 16.1878 13.0211 15.8333 13.4583 15.8333C13.8956 15.8333 14.25 16.1878 14.25 16.625Z" fill="white" />
              <path d="M7.125 17.4167C7.56223 17.4167 7.91667 17.0622 7.91667 16.625C7.91667 16.1878 7.56223 15.8333 7.125 15.8333C6.68777 15.8333 6.33333 16.1878 6.33333 16.625C6.33333 17.0622 6.68777 17.4167 7.125 17.4167Z" fill="white" />
            </svg>
          </button>


          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2044 14.4719C12.0838 15.3261 10.6845 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667C15.8333 10.8927 15.1774 12.4656 14.1011 13.6495C14.1233 13.6646 14.1447 13.6813 14.1652 13.6995L17.9152 17.0329C18.1732 17.2622 18.1965 17.6572 17.9671 17.9152C17.7378 18.1732 17.3428 18.1965 17.0848 17.9671L13.3348 14.6338C13.2811 14.5861 13.2376 14.5312 13.2044 14.4719ZM14.5833 9.16667C14.5833 12.1582 12.1582 14.5833 9.16667 14.5833C6.17512 14.5833 3.75 12.1582 3.75 9.16667C3.75 6.17512 6.17512 3.75 9.16667 3.75C12.1582 3.75 14.5833 6.17512 14.5833 9.16667Z" fill="white" />
          </svg>

          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z" fill="white" />
            <path d="M9 16.5C12.3137 16.5 15 14.989 15 13.125C15 11.261 12.3137 9.75 9 9.75C5.68629 9.75 3 11.261 3 13.125C3 14.989 5.68629 16.5 9 16.5Z" fill="white" />
          </svg>

        </IconsContainer>
      </MenuWrapper>
      <ContentContainer>
        <TextContainer>
          <Title>
            <GreenText>Soluções sustentáveis</GreenText> em energia solar.
          </Title>
          <Subtitle><b>Deixe o sol pagar sua conta de energia!</b> Solicite um orçamento</Subtitle>
        </TextContainer>
        <ImageContainer>
          <Image src={backgroundImage} alt="Background" />
        </ImageContainer>
      </ContentContainer>

      <Sidebar isOpen={isSidebarOpen}>
        <BoxBlack>
          <ArrowIcon onClick={toggleSidebar}>
          </ArrowIcon>
          <h1>Carrinho</h1>
        </BoxBlack>

        <CentralizedText>
          <p>O carrinho está vazio</p>
        </CentralizedText>
      </Sidebar>
    </Container>
  );
};

export default Header;
