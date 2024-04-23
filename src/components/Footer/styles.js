
import styled from 'styled-components';

export const MaxWidthContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const LogoContainer = styled.div`
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

export const Description = styled.p`
  margin-bottom: 1.5rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 400; 
  line-height: 1.5rem;
  text-align: justify;

    /* Defina a largura para desktop */
    @media only screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const ContactContainer = styled.div`

.contact-item {
  display: flex;
  align-items: center;
}

.contact-item svg {
  margin-right: 0.5rem;
}


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

    .contact-info {
      display: inline-block;
      width: calc(100% - 24px); /* Width of the icon */
    }
  }
`;

export const AreaClienteContainer = styled.div`
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

export const StyledHR = styled.hr`
  width: 100%;
  /* max-width: 900px; */
  /* margin-top: 10px; */
  margin: 0 auto;
  border: none;
  height: 1px;
  background-color: white;
`;

export const BottomFooterContainer = styled.div`
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
    font-weight: 200;
  }

  .link-container {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    a {
      font-size: 0.75rem;
      font-weight: 200;
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

  .link-container {
  display: flex;
  align-items: center; /* Para centralizar verticalmente os itens */
  margin-top: 1rem;
}

.link-container > * {
  display: inline-flex; /* Exibe os itens na mesma linha */
  align-items: center; /* Alinha os itens verticalmente */
}

.link-container a,
.link-container span {
  font-size: 0.75rem;
  font-weight: 200;
  color: white;
  margin: 0 0.25rem;
  text-decoration: none;
  transition: color 0.3s;
}

.link-container a:hover {
  color: #88BB76;
}

.link-container span {
  color: ${({ theme }) => theme.textColor};
}

`;


export const Header = styled.h2`
  font-size: 0.875rem;
  font-weight: 600; 
  color: #fff; 
  text-transform: uppercase; 
  position: relative; 
`;

export const GreenLine = styled.div`
  height: 8px; 
  width: 100px; 
  background-color: #88BB76; 
  margin-top: -0.94rem;
`;