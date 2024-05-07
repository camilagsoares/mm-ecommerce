import React from "react";
import { useCart } from "./CartItems";
import { CartContainer, CartInfo, OrderSummary } from './styles'

export const Cart = () => {

  const { cartItems } = useCart();



  return (
    <CartContainer>
      <CartInfo>
        <h2>Meu carrinho</h2>

        <hr />
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.product.name}</span>
              <span>Quantidade: {item.quantity}</span>
              <img src={item.image} alt={item.product.name} /> 
              <span>Preço: {item.price}</span> 
            </li>
          ))}
        </ul>
      </CartInfo>
      <OrderSummary>
        <h2>Resumo do Pedido</h2>
        <hr />
        <p>Subtotal</p>
        <p>Entrega</p>
        <hr />
        <p>Total   (VALOR)</p>
        <button>Checkout</button>
      </OrderSummary>
    </CartContainer>
  )
}

