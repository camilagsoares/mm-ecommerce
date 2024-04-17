import { TextoCentral } from "./components/TextoCentral";
import TitleComponent from "../../components/Title";

export function AboutUs() {
    return(
      <div className="flex flex-wrap items-start justify-center">
      <div className="w-full md:w-1/2 p-4">
        <TitleComponent title="Sobre nós" />
        <TextoCentral description="A M&M Soluções é uma empresa especializada em desenvolver soluções completas, hardwares e softwares, para o setor industrial. Atuante no mercado desde 2017 desenvolvendo soluções e parcerias sólidas visando a satisfação do cliente. Possui um espírito inovador e sempre busca a excelência para se tornar referência no Mercado de soluções tecnológicas." />
        
        <TitleComponent title="NOSSO PROPÓSITO" />
        <TextoCentral description="Trazer soluções sustentáveis na área de tecnologia para o planeta." />
        
        <TitleComponent title="O QUE NOS DIFERENCIA:" />
        <TextoCentral description="Trazer soluções sustentáveis na área de tecnologia para o planeta." />
      </div>
    
      <div className="w-full md:w-1/2 p-4 flex justify-center">
        <img src="caminho/para/sua/imagem.jpg" alt="Imagem" className="rounded-full h-auto max-w-xs" />
      </div>
    </div>
    
    )
}