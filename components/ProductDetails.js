import { useEffect, useState } from 'react';
import product from '../dummyProductData';
import styles from '../styles/ProductDetails.module.css';
import productCategories from '../dummyProductCategories';

const ProductInformation = () => {
  const [productId, setProductId] = useState(null);

  useEffect(
    () =>
      setProductId(
        new URLSearchParams(window.location.search).get('productId')
      ),
    []
  );

  const goodIngredientsCount = product.ingredients.reduce((acc, val) => {
    if (productCategories.good.includes(val)) {
      return ++acc;
    }
    return acc;
  }, 0);

  const lowIngredientsCount = product.ingredients.reduce((acc, val) => {
    if (productCategories.low.includes(val)) {
      return ++acc;
    }
    return acc;
  }, 0);

  const moderateIngredientsCount = product.ingredients.reduce((acc, val) => {
    if (productCategories.moderate.includes(val)) {
      return ++acc;
    }
    return acc;
  }, 0);

  const highIngredientsCount = product.ingredients.reduce((acc, val) => {
    if (productCategories.high.includes(val)) {
      return ++acc;
    }
    return acc;
  }, 0);

  const veryHighIngredientsCount = product.ingredients.reduce((acc, val) => {
    if (productCategories.veryHigh.includes(val)) {
      return ++acc;
    }
    return acc;
  }, 0);

  const extremeIngredientsCount = product.ingredients.reduce((acc, val) => {
    if (productCategories.extreme.includes(val)) {
      return ++acc;
    }
    return acc;
  }, 0);

  if (!productId) {
    return null;
  } else {
    return (
      <div className={styles.product_box}>
        <div className={styles.product_name}>{product.name}</div>

        <div className={styles.product_main}>
          {/* <div className={styles.product_id}>The product id is {productId}</div> */}
          <div className={styles.product_classifications}>
            <div className={styles.product_classification}>
              <div className={styles.product_classification_square}></div>
              <div>Good: {goodIngredientsCount}</div>
            </div>

            <div className={styles.product_classification}>
              <div className={styles.product_classification_square}></div>
              <div>Low: {lowIngredientsCount}</div>
            </div>

            <div className={styles.product_classification}>
              <div className={styles.product_classification_square}></div>
              <div>Moderate: {moderateIngredientsCount}</div>
            </div>

            <div className={styles.product_classification}>
              <div className={styles.product_classification_square}></div>
              <div>High: {highIngredientsCount}</div>
            </div>

            <div className={styles.product_classification}>
              <div className={styles.product_classification_square}></div>
              <div>Very high: {veryHighIngredientsCount}</div>
            </div>

            <div className={styles.product_classification}>
              <div className={styles.product_classification_square}></div>
              <div>Extreme: {extremeIngredientsCount}</div>
            </div>
          </div>

          <img src={product.image} className={styles.product_image} />
        </div>
      </div>
    );
  }
};

export default ProductInformation;
