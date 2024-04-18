// import Footer from "../../components/Footer";
// import SecondTitle from "../../components/SecondTitle";
import TitleComponent from "./components/Title/Title";
import React, { useState } from 'react';
import ProductSlider from "./components/ProductSlider/ProductSlider";
import { CircleGreen, AlignCenter } from './style'
import { Form } from "./components/Form/Form";

export function Index() {

  const [hovered, setHovered] = useState(false);


  return (
    <div  style={{ overflow: 'hidden' }}>

      <TitleComponent title="PRODUTOS" />

      <ProductSlider />

      <AlignCenter>
        <CircleGreen />
      </AlignCenter>

      <Form />

    </div>
  )
}