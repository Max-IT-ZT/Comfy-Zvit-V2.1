import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <a href="" className={css.logoLink}>
        <img
          src="../../public/logo3.png"
          alt="MaxCrafter"
          className={css.logoImg}
        />
      </a>
      <nav className={css.menu}>
        <ul className={css.menuList}>
          <li className={css.menuItem}>План</li>
          <li className={css.menuItem}>Звіт</li>
          <li className={css.menuItem}>Галерея</li>
          <li className={css.menuItem}>Контакти</li>
          <li className={css.menuItem}>Гаманець</li>
          <li className={css.menuItem}>Графік</li>
        </ul>
      </nav>
    </header>
  );
}
