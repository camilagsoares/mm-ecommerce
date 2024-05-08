import React from "react";
import { useCart } from "../Cart/CartItems";
import { CheckoutContainer, CustomerInfoContainer, InputField, Label, LabeledInputField, LabeledSelect, ProductInfoContainer } from "./styles";
import { FormControl,Select, MenuItem } from "@mui/material"; 


export const PageCheckout = () => {
  const { cartItems } = useCart();

  const countryOptions = [
    { value: "br", label: "Brasil" },
  ];

  const [selectedCountry, setSelectedCountry] = React.useState(""); 

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <CheckoutContainer>
      <CustomerInfoContainer>
        <h3>Informações do cliente</h3>
        <LabeledInputField>
          <Label>Email</Label>
          <InputField />
        </LabeledInputField>
        <LabeledInputField>
          <Label>Nome</Label>
          <InputField />
        </LabeledInputField>
        <LabeledInputField>
          <Label>Sobrenome</Label>
          <InputField />
        </LabeledInputField>
        <LabeledInputField>
          <Label>Telefone</Label>
          <InputField />
        </LabeledInputField>
        <LabeledSelect>
      <Label>País/região</Label>
      <FormControl fullWidth>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={selectedCountry}
          onChange={handleChange}
        >
          {countryOptions.map((country) => (
            <MenuItem key={country.value} value={country.value}>
              {country.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </LabeledSelect>
      </CustomerInfoContainer>

      <ProductInfoContainer>
        <h3>Resumo do pedido</h3>
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

        <a>Insira um código promocional</a>

        <hr />

        <span>Subtotal </span>
        <span>Entrega </span>
        <span>IPI / ICMS / ISS </span>

        <hr />

        <p>Total</p>
      </ProductInfoContainer>
    </CheckoutContainer>

  );
};
