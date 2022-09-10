import { MenuItem } from '../menu-item';
import styles from './styles.module.css'

export function CategoryMenu() {
  return (
    <div className={styles.directoryMenu}>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
}