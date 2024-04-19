import styled from "styled-components";

export const AlignCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleGreen = styled.div`
  width: 25px;
  height: 24px;
  border-radius: 4px;
  margin-top: 80px;
  background-color: #88BB76;

  @media (max-width: 768px) {
    width: 17px;
    height: 17px;
    margin-top: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
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

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.p`
  color: #1e3a8a;
  font-weight: bold;
  text-decoration: underline;
`;

export const Heading = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 2.5rem;
  letter-spacing: 0.05em;
`;

export const Text = styled.p`
  color: #555;
`;

export const Price = styled.p`
  font-weight: bold;
`;

export const Button = styled.button`
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

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CardContainer = styled.div`
  margin-left: 1rem;
  flex-shrink: 0;
  overflow: hidden;
`;

export const AdditionalImagesContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const BlueBackground = styled.div`
  position: relative;
  width: 100vw;
  border-radius: 30px;
  max-width: 1600px;
  height: 48vw;
  max-height: 30rem;
  background-color: #265094;
`;

export const TextCardBlue = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - 3rem);
  max-width: 42rem;
  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const GreenFormContainer = styled.div`
  background-color: #88bb76;
  width: 100vw;
  max-width: 45rem;
  padding: 2rem;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: -2rem;
  right: 4rem;
  margin-bottom: -2rem;
`;

export const ResponsiveGreenFormContainer = styled(GreenFormContainer)`
label {
  color : white;
  font-family: 'Inter';
  font-style: bold;
}
  @media (max-width: 768px) {
    width: 90%;
    max-width: none;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #cbd5e0;
  border-radius: 1rem;
  padding: 0.5rem;
  width: calc(100% - 2 * 0.5rem);
  margin-bottom: 1rem;
  outline: none;
  font-size: 14px; /* Tamanho da fonte ajustável para dispositivos móveis */
`;

export const StyledTextArea = styled.textarea`
  border: 1px solid #cbd5e0;
  border-radius: 1rem;
  padding: 0.5rem;
  width: calc(100% - 2 * 0.5rem);
  margin-bottom: 1rem;
  resize: none;
  outline: none;
  font-size: 14px; /* Tamanho da fonte ajustável para dispositivos móveis */
`;

export const SubmitButton = styled.button`
  background-color: #265094;
  color: white;
  padding: 0.75rem 3rem; /* Ajuste o padding conforme necessário */
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a2953;
  }
`;

export const ContainerFormBlue = styled.div`
  margin-top: 180px;
  margin-bottom: 200px;
`;

export const StyledSelect = styled.select`
  border: 1px solid #cbd5e0;
  border-radius: 1rem;
  padding: 0.5rem;
  width: calc(100% - 2 * 0.5rem);
  margin-bottom: 1rem;
  outline: none;
  font-size: 14px; /* Tamanho da fonte ajustável para dispositivos móveis */
`;


