import React, { ChangeEvent, useState } from "react";
import { useCart } from "./CartItems";
import { ButtonAdd, CartContainer, CartInfo, OrderSummary, InputContainer, ActionContainer, ButtonWithIcon } from './styles'
import { Link } from "react-router-dom";
import { HiMiniLockClosed } from "react-icons/hi2";
import { IoPricetagOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";

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

  const handlePromoCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPromoCode(event.target.value);
  };

  const handleObservationChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
                  <span>Quantidade: {item.quantity}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <hr />
        <div className="actions">
          <ActionContainer>
            <ButtonWithIcon onClick={togglePromoCodeInput}>
              <IoPricetagOutline /> Insira o código promocional
            </ButtonWithIcon>
            {promoCodeInputVisible && (
              <InputContainer>
                <input type="text" value={promoCode} onChange={handlePromoCodeChange} placeholder="Insira o código promocional" />
              </InputContainer>
            )}
          </ActionContainer>
          <ActionContainer>
            <ButtonWithIcon onClick={toggleObservationInput}>
              <FiFileText /> Adicione uma observação
            </ButtonWithIcon>
            {observationInputVisible && (
              <InputContainer>
                <textarea value={observation} onChange={handleObservationChange} placeholder="Instruções? Pedidos especiais? Adicione-os aqui." />
              </InputContainer>
            )}
          </ActionContainer>
        </div>
      </CartInfo>
      <OrderSummary>
        <h2>Resumo do Pedido</h2>
        <hr />
        <p>Subtotal</p>
        <p>Entrega   $60</p>
        <hr />
        <p>Total (VALOR)</p>
        <Link to="/checkout">
          <ButtonAdd>Checkout</ButtonAdd>
          <p className="textCheckout"> <HiMiniLockClosed />
            Checkout seguro</p>
        </Link>
      </OrderSummary>
    </CartContainer>
  )
}

