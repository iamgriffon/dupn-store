import styles from './styles.module.css'
import { CartItemProps } from './types';

export function CartItem({ imageUrl, price, quantity, name }: CartItemProps) {
  return (
    <div className={styles.cartItemContainer}>
      <img src={imageUrl} />
      <div className={styles.itemDetails}>
        <span>{name}</span>
        <span>{quantity}x ${price}</span>
      </div>
    </div>
  );
}