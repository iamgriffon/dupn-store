import styles from './styles.module.css'

export function CheckoutHeader() {
  return (
    <div className={styles.checkoutContainer}>
      <header className={styles.checkoutHeader}>

        <div className={styles.checkoutItem}>
          <span>Product</span>
        </div>
        <div className={styles.checkoutItem}>
          <span>Description</span>
        </div>
        <div className={styles.checkoutItem}>
          <span>Quantity</span>
        </div>
        <div className={styles.checkoutItem}>
          <span>Price</span>
        </div>
        <div className={styles.checkoutItem}>
          <span>Remove</span>
        </div>
      </header>
      <div className={styles.totalItems}>
        Total = R$ TOTAL
      </div>
      
    </div>
  );
}