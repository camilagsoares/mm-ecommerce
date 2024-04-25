import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from "react-icons/fa6";
import logo from '../../assets/logo.png'
import { AreaClienteContainer, BottomFooterContainer, ContactContainer, Description, GreenLine, GridContainer, Header, LogoContainer, MaxWidthContainer, StyledHR } from './styles';

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


const Footer: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <StyledFooter theme={themeColors}>

      <MaxWidthContainer>
        <GridContainer>
          <LogoContainer>
            <h2>
              <img src={logo} alt="Exemplo" />
            </h2>
            <Description>
              A M&M Soluções é uma empresa especializada em desenvolver soluções completas, hardwares e softwares, para o setor industrial. Atuante no mercado desde 2017 desenvolvendo soluções e parcerias sólidas visando a satisfação do cliente. Possui um espírito inovador e sempre busca a excelência para se tornar referência no Mercado de soluções tecnológicas.
              <div style={{ display: "flex", marginBottom: "1rem", marginTop: '1.3rem' }}>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9999 22.6666C19.7383 22.6666 21.9583 20.4467 21.9583 17.7083C21.9583 14.9699 19.7383 12.75 16.9999 12.75C14.2615 12.75 12.0416 14.9699 12.0416 17.7083C12.0416 20.4467 14.2615 22.6666 16.9999 22.6666Z" fill="#88BB76" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83325 17C2.83325 11.7038 2.83325 9.05575 3.97204 7.08331C4.71807 5.79115 5.79109 4.71813 7.08325 3.9721C9.05568 2.83331 11.7038 2.83331 16.9999 2.83331C22.2961 2.83331 24.9442 2.83331 26.9166 3.9721C28.2087 4.71813 29.2818 5.79115 30.0278 7.08331C31.1666 9.05575 31.1666 11.7038 31.1666 17C31.1666 22.2961 31.1666 24.9442 30.0278 26.9166C29.2818 28.2088 28.2087 29.2818 26.9166 30.0279C24.9442 31.1666 22.2961 31.1666 16.9999 31.1666C11.7038 31.1666 9.05568 31.1666 7.08325 30.0279C5.79109 29.2818 4.71807 28.2088 3.97204 26.9166C2.83325 24.9442 2.83325 22.2961 2.83325 17ZM16.9999 24.7916C20.9119 24.7916 24.0833 21.6203 24.0833 17.7083C24.0833 13.7963 20.9119 10.625 16.9999 10.625C13.0879 10.625 9.91659 13.7963 9.91659 17.7083C9.91659 21.6203 13.0879 24.7916 16.9999 24.7916ZM23.3749 11.3333C24.5485 11.3333 25.4999 10.3819 25.4999 9.20831C25.4999 8.03471 24.5485 7.08331 23.3749 7.08331C22.2013 7.08331 21.2499 8.03471 21.2499 9.20831C21.2499 10.3819 22.2013 11.3333 23.3749 11.3333Z" fill="#88BB76" />
                </svg>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.14508 29.3175L7.79163 24.7917L6.60221 22.4129C4.32135 17.8512 5.01666 12.3642 8.36328 8.51556C13.0704 3.10233 21.3416 2.70794 26.5425 7.64875L26.9051 7.99326C29.6049 10.558 31.0233 14.1911 30.7756 17.9067C30.2468 25.8389 22.5572 31.2778 14.9018 29.1342L12.0416 28.3334L7.50341 29.63C7.30603 29.6864 7.11605 29.5207 7.14508 29.3175ZM12.4829 12.0374L11.9575 13.2681C11.5355 14.2565 11.3963 15.3564 11.8049 16.3507C12.2957 17.5451 13.2362 19.2428 14.9772 20.7948C16.7182 22.3469 18.5094 23.0844 19.7494 23.433C20.7817 23.7232 21.8542 23.4553 22.7831 22.9188L23.9783 22.2284C24.7885 21.7604 24.9154 20.639 24.2302 20.0003L23.3139 19.123C22.8084 18.6517 22.0326 18.6297 21.502 19.0719C20.9069 19.5678 19.6106 20.2271 18.934 19.8503C18.5302 19.6255 17.5699 18.8854 17.2588 18.608C16.8977 18.2862 16.0033 17.333 15.71 16.9095C15.3355 16.3686 15.7625 15.1389 16.021 14.5336L16.1833 14.159C16.4187 13.6077 16.2788 12.9696 15.8318 12.5711L14.6824 11.545C13.9735 10.9131 12.8561 11.1633 12.4829 12.0374Z" fill="#88BB76" />
                </svg>
              </div>
            </Description>

          </LogoContainer>
          <ContactContainer>
            <Header>CONTATO</Header>
            <GreenLine />
            <div className="divider" />
            <ul>
              <li>
                <div className="contact-item">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3123 3.71752L2.24335 1.85541C2.90473 0.532665 4.66762 0.246584 5.71334 1.29231L8.18522 3.76419C8.84467 4.42363 9.00815 5.43107 8.59108 6.26522L8.30646 6.83447C7.84853 7.75032 7.84091 8.83406 8.3745 9.708C8.79223 10.3922 9.32703 11.1779 9.85965 11.7105C10.3187 12.1696 10.9657 12.6302 11.5737 13.0162C12.5927 13.663 13.8926 13.541 14.8647 12.8258C15.7316 12.1879 16.9372 12.2927 17.681 13.0705L19.8037 15.2901C20.8119 16.3442 20.5115 18.0732 19.2069 18.7255L17.2825 19.6877C15.787 20.4355 14.0925 20.7531 12.5117 20.2082C10.6129 19.5537 7.89171 18.2451 5.32333 15.6767C2.75495 13.1083 1.4463 10.3871 0.79177 8.48831C0.246865 6.90754 0.564533 5.21305 1.3123 3.71752Z" fill="#88BB76" />
                  </svg>

                  <p className="text-white font-bold">(35) 99932 - 9177</p>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0.333252H17.5C19.8932 0.333252 21.8333 2.27335 21.8333 4.66659V13.3333C21.8333 15.7265 19.8932 17.6666 17.5 17.6666H4.5C2.10677 17.6666 0.166672 15.7265 0.166672 13.3333V4.66659C0.166672 2.27335 2.10677 0.333252 4.5 0.333252ZM5.15 3.09575C4.88077 2.73677 4.37149 2.66401 4.0125 2.93325C3.65352 3.20249 3.58077 3.71177 3.85 4.07075L6.88334 8.1152C8.94167 10.8596 13.0583 10.8596 15.1167 8.1152L18.15 4.07075C18.4192 3.71177 18.3465 3.20249 17.9875 2.93325C17.6285 2.66401 17.1192 2.73677 16.85 3.09575L13.8167 7.1402C12.4083 9.01797 9.59167 9.01797 8.18334 7.1402L5.15 3.09575Z" fill="#88BB76" />
                  </svg>

                  <p className="text-white font-bold">comercial@mmsolind.com</p>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3125 10.375C13.3125 11.9283 12.0533 13.1875 10.5 13.1875C8.9467 13.1875 7.6875 11.9283 7.6875 10.375C7.6875 8.8217 8.9467 7.5625 10.5 7.5625C12.0533 7.5625 13.3125 8.8217 13.3125 10.375Z" fill="#88BB76" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1292 21.9647C16.4957 19.5897 20.1237 15.3581 20.625 10.375C20.625 4.78312 16.0919 0.25 10.5 0.25C4.90812 0.25 0.375 4.78312 0.375 10.375C0.880233 15.3976 4.13496 19.6568 8.8444 22.0208C9.88211 22.5417 11.1091 22.5195 12.1292 21.9647ZM15 10.375C15 12.8603 12.9853 14.875 10.5 14.875C8.01472 14.875 6 12.8603 6 10.375C6 7.88972 8.01472 5.875 10.5 5.875C12.9853 5.875 15 7.88972 15 10.375Z" fill="#88BB76" />
                  </svg>

                  <div>
                    <p className="text-white font-bold">Alameda Jatobá, 11 - Portal da Serra,</p>
                    <p className="text-white font-light">Santa Rita do Sapucaí-MG, 37539-472</p>
                  </div>
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
                <Header>NOVIDADES</Header>
                <GreenLine />

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
          <span className='direitos'>© 2024 by M&M Soluções.  | CNPJ: 28.926.408/0001-08</span>
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
