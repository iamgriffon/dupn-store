import styles from './styles.module.css'

export function CheckoutItem() {
  return (
    <div className={styles.checkoutItemContainer}> 
      <div className={styles.checkoutImageContainer}>
        <img src={'https://github.com/iamgriffon.png'} alt="checkout item" />
      </div>

      <span className={styles.checkoutItemText}>Item Name</span>
      <div className={styles.checkoutItemQuantity}>
        <span className={styles.arrow} onClick={() => console.log('Removed Item')}>&#10094;</span>
        <span className={styles.value}>Amount (1)</span>
        <span className={styles.arrow} onClick={() => console.log('Added Item')}>&#10095;</span>
      </div>
      <span className={styles.checkoutItemText}>$ price here</span>
      <button className={styles.removeButton} onClick={() => console.log('Delete Cart Item')}>&#10005;</button>
    </div>
  );
}