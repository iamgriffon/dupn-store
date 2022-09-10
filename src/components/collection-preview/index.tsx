import { CollectionItem } from '../collection-item';
import styles from './styles.module.css'

export function CollectionPreview() {
  return (
    <div className={styles.collectionOverview}>
      <div className={styles.collectionPreviewContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.itemPreviewContainer}>
          <CollectionItem />
          <CollectionItem />
        </div>
      </div>
    </div>
  );
}