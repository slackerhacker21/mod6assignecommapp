import styles from './ProductItem.module.css';

function ProductItem({ product }) {
  return (
    <div className={styles.productItem}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;
