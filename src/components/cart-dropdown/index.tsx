import { useRouter } from 'next/router';
import { useState } from 'react';
import { CartItem } from '../cart-item';
import styles from './styles.module.css';

export function CartDropdown() {

  const [dropdownState, setDropdownState] = useState(false)
  const router = useRouter();

  function handleCartButton() {
    router.push('/checkout');
    setDropdownState(false)
  }

  return (
    <div className={styles.cartDropdownContainer}>
      <div className={styles.cartItemContainer}>
        {true ?
          (<CartItem imageUrl='https://github.com/iamgriffon.png' name='name' quantity={20} price={200.30} />)
          : (<span className={styles.cartEmptyMessage}>Cart is Empty</span>)}
      </div>
      <button className={styles.cartButton}
        onClick={() => { handleCartButton }}>
        CHECKOUT
      </button>
    </div>
  );
}