import styles from './styles.module.css'

export function CollectionItem() {
  return (
    <div className={styles.collectionItemContainer}>
      <img className={styles.collecitonImage} src={'https://github.com/iamgriffon.png'}/>
      <footer className={styles.itemFooter}>
        <span className={styles.itemName}>ITEM NAME</span>
        <span className={styles.itemPrice}> R$ Item Price</span>
      </footer>
      <button className={styles.addButton} onClick={() => console.log('Added to cart!')}>Add to Cart</button>
    </div>
  );
}