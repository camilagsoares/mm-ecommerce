import { TextoCentral } from "./components/TextoCentral";
import TitleComponent from "../../components/Title";
import styled from "styled-components";

const ListItem = styled.li`
  margin-bottom: 0.5em;
`;

export function AboutUs() {
  return (
    <div className="flex flex-wrap items-start justify-center">
      <div className="w-full md:w-1/2 p-4">
        <TitleComponent title="Sobre nós" />
        <TextoCentral description="A M&M Soluções é uma empresa especializada em desenvolver soluções completas, hardwares e softwares, para o setor industrial. Atuante no mercado desde 2017 desenvolvendo soluções e parcerias sólidas visando a satisfação do cliente. Possui um espírito inovador e sempre busca a excelência para se tornar referência no Mercado de soluções tecnológicas." />

        {/* <TitleComponent title="NOSSO PROPÓSITO" />
        <TextoCentral description="Trazer soluções sustentáveis na área de tecnologia para o planeta." /> */}

        {/* <TitleComponent title="O QUE NOS DIFERENCIA:" />

        <div className="flex items-center justify-center">
          <div className="mt-8 w-3/4">
            <p className="text-justify text-gray-600">
              <ul>
                <li>• Preço competitivo;</li>
                <li>• Equipe especializada para assistência técnica;</li>
                <li>• Agilidade na entrega;</li>
                <li>• Logística otimizada;</li>
                <li>•  Instalação limpa.</li>

              </ul>
            </p>
          </div>
        </div> */}

      </div>

      <div className="mt-16">
        <img src="https://i.ibb.co/WtpvW3p/Mask-group.png" alt="Mask-group" />
      </div>
    </div>

  )
}