import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';

const Products: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        setProducts(response.data);
      } catch (e) {
        console.log(`Failed to load data`, e);
      }
    }

    fetchProducts();
  }, []);

  return (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</Box>
  );
};

export default Products;
