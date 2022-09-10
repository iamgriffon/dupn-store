import Link from 'next/link';
import { CartDropdown } from '../cart-dropdown';
import { CartIcon } from '../cart-icon';
import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
      <Link href='/'>
        <img  src='./assets/crown.svg' alt='dupn store logo' />
      </Link>
        <span>DUPN-STORE</span>
      </div>
      
      <section className={styles.optionsContainer}>
        <Link className={styles.optionsLink} href='/'>SHOP</Link>
        <Link className={styles.optionsLink} href='/'>CONTACT</Link>
        {
          true? 
          (<Link className={styles.optionsLink} href='/'>SIGN OUT</Link>)
        : (<Link className={styles.optionsLink} href='/'>SIGN IN</Link>)
        }
        <CartIcon />
      </section>
      {/* { true? null : <CartDropdown /> } */}
    </header>
  );
}