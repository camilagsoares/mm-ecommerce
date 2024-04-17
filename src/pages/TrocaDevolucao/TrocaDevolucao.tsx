import React from 'react'; // Importe o React
import { TitleBox, LineGreen, TitleContainer, BoxTitle } from "../../components/TitleStyles" // Importe os estilos do TitleComponent

import TitleComponent from "../../components/Title"

export function TrocaDevolucao() {
  return (
    <div>
      <TitleComponent title="Troca e Devolução" />

      <div className="flex items-center justify-center">
        <div className="mt-8 w-3/4">
          <p className="text-justify text-gray-600">Nosso objetivo é que você tenha uma experiência incrível conosco, entretanto caso você tenha algum problema com seu pedido, saiba que estaremos aqui para te ajudar na área do cliente. É importante salientar que você pode solicitar a troca ou a devolução do seu pedido no prazo de até 7 (sete) dias corridos, contados a partir do dia do recebimento do produto.</p>
          <p className="text-justify text-gray-600 mt-4">TROCA POR DEFEITO DO PRODUTO</p>
          <p className="text-justify text-gray-600 mt-4">Nossos produtos são criteriosamente separados e analisados antes de sua liberação, porém caso receba um produto com defeito, você deverá entrar em contato conosco pelo e-mail comercial@mmsolind.com ou através área do cliente, informando o número do pedido, seus dados (nome completo e CPF) e o motivo da troca. <br />
            O prazo para troca do produto é de até sete (7) dias corridos, a contar da data do recebimento.
            Após o recebimento em nossa empresa, a mercadoria irá passar por análises e caso seja confirmado o defeito, será enviado um novo produto em perfeitas condições.
            Nós nos responsabilizaremos pelos custos de envio da troca do produto com defeito.</p>
          <p className="text-justify text-gray-600 mt-4">DEVOLUÇÃO</p>
          <p className="text-justify text-gray-600 mt-4">A comunicação de devolução deverá ser enviada para o e-mail comercial@mmsolind.com, informando o número do pedido, seus dados (nome completo e CPF) e o motivo da devolução.</p>
          <p className="text-justify text-gray-600">O prazo para devolução do produto é de até sete (7) dias corridos, a contar da data do recebimento.
            Após o recebimento em nossa empresa, o produto será avaliado por nosso Setor de Qualidade e estando em perfeitas condições, será dada continuidade ao processo de reembolso.</p>
        </div>

      </div>
    </div>
  )
}
