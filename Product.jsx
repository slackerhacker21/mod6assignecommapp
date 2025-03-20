import { useState } from 'react';
import ProductList from './ProductList';
import styles from './App.module.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10.99, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 15.99, description: 'Description 2' },
    { id: 3, name: 'Product 3', price: 20.49, description: 'Description 3' },
    { id: 4, name: 'Product 4', price: 25.00, description: 'Description 4' },
  ]);

  return (
    <div className={styles.appContainer}>
      <h1>Product Listing</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
