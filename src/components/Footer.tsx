import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from "react-icons/fa6";

const themeColors = {
  customGreen: '#304F4E',
  customColor: '#122F5D',
  customWhite: '#ebebeb',
  bgBlue: "#265094",
  textVerde: "#88BB76",
  bgFooter: "#041837",
  textColor: "#fff",
  btnBlue: "#265094",
  textH3: "#323134",
  textCinza: "#66666B",
};

interface StyledFooterProps {
  theme: {
    bgFooter: string;
    textColor: string;
    textGreen: string;
    customColor: string;
    borderColor: string;
    maxWidth: string;
  };
}

const StyledFooter = styled.footer<StyledFooterProps>`
  background-color: ${({ theme }) => theme.bgFooter};
`;

const MaxWidthContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 2.5rem;
  
  h2 {
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textColor};
  }
  
  img {
    width: 100%;
    max-width: 215px;
    height: auto;
  }
`;

const Description = styled.p`
  margin-bottom: 1.5rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 400; 
  line-height: 1.5rem;
`;

const ContactContainer = styled.div`
  h2 {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    margin-bottom: 1.5rem;
  }

  .divider {
    height: 2px;
    width: 10px;
    background-color: ${({ theme }) => theme.textGreen};
    margin-top: 0.25rem;
  }

  ul {
    color: ${({ theme }) => theme.textColor};
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 1.5rem;

    li {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const AreaClienteContainer = styled.div`
  h2 {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    /* color: ${({ theme }) => theme.textColor}; */
    margin-bottom: 1.5rem;
  }

  .divider {
    height: 2px;
    width: 20px;
    background-color: ${({ theme }) => theme.textGreen};
    margin-top: 0.25rem;
  }

  ul {
    color: ${({ theme }) => theme.textColor};
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 1.5rem;

    li {
      margin-bottom: 1rem;
    }
  }

  .button-container {
  margin-top: 1.75rem;
  display: flex;
  align-items: center;
}


.email-input {
  width: 280px;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 9999px;
  outline: none;
  color: ${({ theme }) => theme.textColor};
  margin-right: -20px; /* Reduzi a margem entre o input e o botão */

  @media (max-width: 768px) {
    width: 200px;
  }
}


.submit-button {
  width: 120px; /* Aumentei a largura do botão */
  height: 37px;
  background-color: #88BB76;
  color: #fff;
  border: none;
  /* border-radius: 9999px; */
  border-top-right-radius: 9999px; /* Adicionei borda superior e esquerda ao botão */
  border-bottom-right-radius: 9999px; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: -20px; /* Reduzi a margem entre o input e o botão */

  svg {
    margin-top: 2px;
  }

  &:hover {
    background: #6a955a;
  }
}
 .btn-teste{
  background: #88BB76;
  color: white;
  border-radius: 57px;
  cursor: pointer;
  width: 200px;
  height: 45px;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover{
    background: #6a955a;
  }
 }
`;

const StyledHR = styled.hr`
  width: 100%;
  /* max-width: 900px; */
  /* margin-top: 10px; */
  margin: 0 auto;
  border: none;
  height: 1px;
  background-color: white;
`;

const BottomFooterContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.bgFooter};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  span {
    font-size: 0.75rem;
    color: white;
  }

  .link-container {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    a {
      font-size: 0.75rem;
      color: white;
      margin: 0 0.25rem;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #88BB76
      }
    }

    span {
      color: ${({ theme }) => theme.textColor};
      margin: 0 0.25rem;
    }
  }
`;

const Header = styled.h2`
  font-size: 0.875rem; /* Tamanho da fonte */
  font-weight: 600; /* Espessura da fonte */
  color: #fff; /* Cor do texto */
  text-transform: uppercase; /* Transforma o texto em maiúsculas */
`;

// Estilizando a faixa verde
const GreenLine = styled.div`
  height: 2px; /* Altura da faixa */
  width: 20px; /* Largura da faixa */
  background-color: #88BB76; /* Cor de fundo da faixa */
  margin-top: 0.25rem; /* Margem superior da faixa */
`;

const Footer: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <StyledFooter theme={themeColors}>

      <MaxWidthContainer>
        <GridContainer>
          <LogoContainer>
            <h2>
              <img src="/logo.svg" alt="Exemplo" />
            </h2>
            <Description>
              A M&M Soluções é uma empresa especializada em desenvolver soluções completas, hardwares e softwares, para o setor industrial. Atuante no mercado desde 2017 desenvolvendo soluções e parcerias sólidas visando a satisfação do cliente. Possui um espírito inovador e sempre busca a excelência para se tornar referência no Mercado de soluções tecnológicas.
            </Description>
          </LogoContainer>
          <ContactContainer>
            <h2>CONTATO</h2>
            <div className="divider" />
            <ul>
              <li>
                <div>
                  <span>icon</span>
                  <p className="text-white font-bold">(35) 99932 - 9177</p>
                </div>
              </li>
              <li>
                <div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7803 9.78033C17.0732 9.48744 17.0732 9.01256 16.7803 8.71967C16.4874 8.42678 16.0126 8.42678 15.7197 8.71967L10.75 13.6893L8.28033 11.2197C7.98744 10.9268 7.51256 10.9268 7.21967 11.2197C6.92678 11.5126 6.92678 11.9874 7.21967 12.2803L10.2197 15.2803C10.5126 15.5732 10.9874 15.5732 11.2803 15.2803L16.7803 9.78033Z" fill="#88BB76" />
                  </svg>

                  <p className="text-white font-bold">comercial@mmsolind.com</p>
                </div>
              </li>
              <li>
                <div>
                  <span>icon</span>
                  <p className="text-white font-bold">Alameda Jatobá, 11 - Portal da Serra,</p>
                  <p className="text-white font-light">Santa Rita do Sapucaí-MG, 37539-472</p>
                </div>
              </li>
            </ul>
          </ContactContainer>
          <AreaClienteContainer>
            <Header>Área do Cliente - Sac</Header>
            <GreenLine />
            {/* <h2>Area do Cliente - Sac</h2> */}
            <p className='text-white mt-7'>Perguntas frequentes e suporte ao cliente.</p>

            <button className='btn-teste'>Clique aqui</button>

            <div className="divider" />
            <ul>
              <li>

              </li>
              <li>
                <p className="text-white">NOVIDADES</p>

                <div className="divider" />
                <p className="text-white">Receba todas as novidades dos nossos produtos e serviços em primeira mão em seu e-mail.</p>
                <div className="button-container">
                  <input type="email" placeholder="Seu email" className="email-input" />
                  <button
                    className={`submit-button ${hovered ? 'hover:bg-customColor' : 'hover:bg-textVerde'}`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <span>
                      <FaArrowRight />

                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </AreaClienteContainer>
        </GridContainer>
        <StyledHR />
        <BottomFooterContainer>
          <span>© 2024 by M&M Soluções.  | CNPJ: 28.926.408/0001-08</span>
          <div className="link-container">
            <a href="/sobre-nos">Sobre nós</a>
            <span>|</span>
            <a href="/seguranca">Segurança</a>
            <span>|</span>
            <a href="/politica-privacidade">Política de Privacidade</a>
            <span>|</span>
            <a href="/envio">Envio</a>
            <span>|</span>
            <a href="/troca-devolucao">Troca e Devolução</a>
          </div>
        </BottomFooterContainer>
      </MaxWidthContainer>
    </StyledFooter>
  );
};

export default Footer;
