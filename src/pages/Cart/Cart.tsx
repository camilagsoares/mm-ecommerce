import React, { useState } from "react";
import { useCart } from "./CartItems";
import { ButtonAdd, CartContainer, CartInfo, OrderSummary } from './styles'
import { Link } from "react-router-dom";

export const Cart = () => {

  const { cartItems } = useCart();
  const [promoCodeInputVisible, setPromoCodeInputVisible] = useState(false);
  const [observationInputVisible, setObservationInputVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [observation, setObservation] = useState("");

  const togglePromoCodeInput = () => {
    setPromoCodeInputVisible(!promoCodeInputVisible);
  };

  const toggleObservationInput = () => {
    setObservationInputVisible(!observationInputVisible);
  };

  const handlePromoCodeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPromoCode(event.target.value);
  };

  const handleObservationChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setObservation(event.target.value);
  };


  return (
    <CartContainer>
      <CartInfo>
        <h2>Meu carrinho</h2>

        <hr />

        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className="item-info">
                <img src={item.image} alt={item.product.name} />
                <div className="item-info-details">
                  <span>{item.product.name}</span>
                  <span>Preço: {item.price}</span>
                </div>
              </div>
              <span>Quantidade: {item.quantity}</span>
            </li>
          ))}
        </ul>


        <hr />
        <div>
          <button onClick={togglePromoCodeInput}>Insira o código promocional</button>
          {promoCodeInputVisible && (
            <input type="text" value={promoCode} onChange={handlePromoCodeChange} />
          )}
        </div>
        <div>
          <button onClick={toggleObservationInput}>Adicione uma observação</button>
          {observationInputVisible && (
            <textarea value={observation} onChange={handleObservationChange} />
          )}
        </div>
      </CartInfo>
      <OrderSummary>
        <h2>Resumo do Pedido</h2>
        <hr />
        <p>Subtotal</p>
        <p>Entrega</p>
        <hr />
        <p>Total (VALOR)</p>
        <Link to="/checkout">
          <ButtonAdd>Checkout</ButtonAdd>
        </Link>
      </OrderSummary>
    </CartContainer>
  )
}

