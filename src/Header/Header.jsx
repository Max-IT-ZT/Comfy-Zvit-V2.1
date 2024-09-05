import { useState } from "react";
import css from "./Header.module.css";
import { FaCode } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={css.header}>
      <a href="#" className={css.logoLink}>
        <div className={css.logo}>
          <p className={css.logoText}>
            Max<span className={css.logoTextSpan}>Crafter</span>
            <FaCode />
          </p>
        </div>
      </a>
      <nav className={css.menu}>
        <ul
          className={`${css.menuList} ${
            menuOpen
              ? `${css.menuListOpen} ${css.menuVisible}`
              : css.menuListOpen
          }`}
        >
          <li className={css.menuItem}>
            <button className={css.menuBtn}>План</button>
          </li>
          <li className={css.menuItem}>
            <button className={css.menuBtn}>Звіт</button>
          </li>
          <li className={css.menuItem}>
            <button className={css.menuBtn}>Галерея</button>
          </li>
          <li className={css.menuItem}>
            <button className={css.menuBtn}>Контакти</button>
          </li>
          <li className={css.menuItem}>
            <button className={css.menuBtn}>Гаманець</button>
          </li>
          <li className={css.menuItem}>
            <button className={css.menuBtn}>Графік</button>
          </li>
        </ul>
        <div className={css.burgerMenu} onClick={toggleMenu}>
          <span
            className={`${css.burgerLine} ${menuOpen ? css.line1 : ""}`}
          ></span>
          <span
            className={`${css.burgerLine} ${menuOpen ? css.line2 : ""}`}
          ></span>
          <span
            className={`${css.burgerLine} ${menuOpen ? css.line3 : ""}`}
          ></span>
        </div>
      </nav>
    </header>
  );
}
