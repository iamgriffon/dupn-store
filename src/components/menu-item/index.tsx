import styles from './styles.module.css'

export function MenuItem() {
  return (
    <div className={styles.menuItemContainer}>
      <div className={styles.backgroundImageContainer} style={{backgroundImage: 'https://github.com/iamgriffon'}} />
      <div className={styles.contentContainer}>
        <title className={styles.contentTitle}>Title</title>
        <span className={styles.contentSubtitle}>SHOP NOW</span>
      </div>
    </div>
  );
}