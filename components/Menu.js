import styles from '../styles/Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.title}>Hvad er der i?</div>

      <ul className={styles.links}>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </div>
  );
};

export default Menu;
