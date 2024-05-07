// Em DetailsProduct.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const DetailsProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Aqui você pode buscar os detalhes do produto com base no ID fornecido na URL
    // Por enquanto, estou apenas simulando a busca com base no ID
    const getProductDetails = async (productId: number) => {
      // Aqui você buscaria os detalhes do produto do backend
      const products: Product[] = [
        { id: 1, name: 'MMS - STARTER HIGH', description: '45.000.00,35.000.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp' },
        { id: 2, name: 'MMS - STARTER MEDIUM', description: '17.400.00,13.500.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp' },
        { id: 3, name: 'MMS - STARTER BASIC', description: '10.400.00,8.000.00', image: 'https://static.wixstatic.com/media/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.png/v1/fill/w_731,h_731,q_90/e8f377_e79a2d5611354c41b13c4632c72dccdf~mv2.webp' },
      ];

      const foundProduct = products.find(product => product.id === Number(productId));
      setProduct(foundProduct || null);
    };

    getProductDetails(Number(id));
  }, [id]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};
