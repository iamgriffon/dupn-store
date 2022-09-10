import styles from './styles.module.css'

export function CartIcon() {
  return (
    <div className={styles.cartIconContainer}>
      <img src='./assets/cart.svg' alt="shopping cart icon" />
      <span className={styles.itemCount}>0</span>
    </div>
  );
}