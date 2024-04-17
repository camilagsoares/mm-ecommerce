import TitleComponent from "../components/Title";

export function Seguranca() {
  
  return (
    <div>
    <TitleComponent title="Segurança" />

    <div className="flex items-center justify-center">
      <div className="mt-8 w-3/4">

        <p className="text-justify text-gray-600 mt-4"> Com relação aos seus dados fornecidos de endereçamento, pagamento e conteúdo do pedido, você pode estar certo de que não serão utilizados para outros fins que não o de processamento dos pedidos realizados, não sendo, portanto, divulgados em hipótese alguma.</p>
        <p className="text-justify text-gray-600 mt-4">Com relação à segurança no tráfego de dados, toda transação que envolver pagamento, seja por cartão de crédito ou não, estará encriptada com a tecnologia SSL (Secure Socket Layer). Isso significa que só nossa empresa terá acesso a estes dados.</p>
      </div>

    </div>
  </div>
  )
}