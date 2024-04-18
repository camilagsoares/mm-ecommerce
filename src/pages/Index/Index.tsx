import Footer from "../../components/Footer";
import SecondTitle from "../../components/SecondTitle";
import TitleComponent from "./components/Title/Title";
import React, { useState } from 'react';
import styled from 'styled-components';
import ProductSlider from "./components/ProductSlider/ProductSlider";
import { CircleGreen, AlignCenter } from './style'

export function Index() {


  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  const Card = styled.div`
    background-color: #fff;
    border: 2px solid #00ab6b;
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
  
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `;

  const Content = styled.div`
    flex: 1;
  `;

  const Title = styled.p`
    color: #1e3a8a;
    font-weight: bold;
    text-decoration: underline;
  `;

  const Heading = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 2.5rem;
    letter-spacing: 0.05em;
  `;

  const Text = styled.p`
    color: #555;
  `;

  const Price = styled.p`
    font-weight: bold;
  `;

  const Button = styled.button`
    background-color: #0078d4;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
    border: none;
    cursor: pointer;
  
    &:hover {
      background-color: #005a9e;
    }
  `;

  const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `;

  const CardContainer = styled.div`
    margin-left: 1rem;
    flex-shrink: 0;
    overflow: hidden; /* Esconde qualquer conteúdo que ultrapasse o tamanho da div */
  `;

  const AdditionalImagesContainer = styled.div`
    display: flex;
    margin-left: 1rem;
    flex-shrink: 0;
  
    @media (max-width: 768px) {
      display: none; /* Oculta as imagens adicionais em dispositivos móveis */
    }
  `;


  const [hovered, setHovered] = useState(false);


  const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
  `;

  const BlueBackground = styled.div`
  position: relative;
  width: 90vw;
  max-width: 1000px;
  height: 45vw;
  max-height: 24rem; /* altura máxima */
  background-color: #265094; /* cor btnBlue */
`;

  const GreenFormContainer = styled.div`
  background-color: #88bb76; /* cor textVerde */
  width: 90vw; /* largura relativa */
  max-width: 24rem; /* largura máxima */
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* sombra */
  position: absolute; /* Alterado de 'relative' para 'absolute' */
  top: -2rem; /* Ajuste a posição para cima */
  right: -2rem; /* Ajuste a posição para a direita */
  margin-bottom: -2rem; /* Compensação para evitar que o formulário se sobreponha ao próximo conteúdo */
`;

  const StyledInput = styled.input`
  border: 1px solid #cbd5e0; /* cor da borda */
  border-radius: 1rem; /* borda arredondada */
  padding: 0.75rem;
  width: calc(100% - 2 * 0.75rem); /* largura ajustada para compensar o padding */
  margin-bottom: 1rem;
  outline: none;
`;

  const StyledTextArea = styled.textarea`
  border: 1px solid #cbd5e0; /* cor da borda */
  border-radius: 1rem; /* borda arredondada */
  padding: 0.75rem;
  width: calc(100% - 2 * 0.75rem); /* largura ajustada para compensar o padding */
  margin-bottom: 1rem;
  resize: none;
  outline: none;
`;

  const SubmitButton = styled.button`
  background-color: #265094; /* cor btnBlue */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px; /* para criar um botão redondo */
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1a2953; /* cor btnBlue escura ao passar o mouse */
  }
`;

  // Adicionando media query para ocultar o TextCardBlue em dispositivos menores
  const TextCardBlue = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%; /* Centralizando verticalmente */
  transform: translateY(-50%); /* Centralizando verticalmente */
  width: calc(100% - 3rem); /* Largura igual à do card azul com margem lateral de 1rem em cada lado */
  max-width: 42rem; /* Largura máxima */
  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

  // Adicionando media query para tornar o formulário responsivo
  const ResponsiveGreenFormContainer = styled(GreenFormContainer)`
  @media (max-width: 768px) {
    width: 90%;
    max-width: none;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
`;


  return (
    <div>

      <TitleComponent title="PRODUTOS" />

      <ProductSlider />

      <AlignCenter>
        <CircleGreen />
      </AlignCenter>

      {/* <div className="flex items-center justify-center mt-16" style={{ overflow: 'hidden' }}>
        <ContainerForm>
          <BlueBackground>
            <ResponsiveGreenFormContainer>
              <form>
                <div>
                  <StyledInput placeholder="Nome:" type="text" id="name" name="name" />
                </div>
                <div>
                  <StyledInput type="email" id="email" name="email" placeholder="E-mail:" />
                </div>
                <div>
                  <StyledInput type="text" id="phone" name="phone" placeholder="Telefone:" />
                </div>
                <div>
                  <StyledTextArea id="message" rows={4} placeholder="Mensagem:" name="message" />
                </div>
                <SubmitButton type="submit">Enviar</SubmitButton>
              </form>
            </ResponsiveGreenFormContainer>
            <TextCardBlue>
              <h2 style={{ color: 'white', margin: '0' }}>Solicite um orçamento</h2>
              <h1 style={{ margin: '0' }}>Como podemos ajudar em seu negócio?</h1>
            </TextCardBlue>
          </BlueBackground>
        </ContainerForm>
      </div> */}
    </div>
  )
}