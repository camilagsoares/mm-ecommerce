import TitleComponent from "../../components/Title";

export function Envio() {

  return (
    <div>
      <TitleComponent title="Envio" />

      <div className="flex items-center justify-center">
        <div className="mt-8 w-3/4">
          <p className="text-justify text-gray-600">Todos os produtos serão enviados em até 2 dias úteis da confirmação de pagamento, de acordo com a forma escolhida por você. O prazo para a entrega varia de acordo com a forma de envio escolhida.</p>
          <p className="text-justify text-gray-600 mt-4">Após a compra, você receberá o código para rastrear a situação da sua encomenda através do site M&M Soluções.</p>
        </div>

      </div>
    </div>
  )
}