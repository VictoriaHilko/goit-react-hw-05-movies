import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const navigationItems = [
    {href: '/', text: 'Home'},
    {href:'movies', text: 'Movies'}
];

export const Header = () => {
  return (
    <div className={css.container}>
    <header className={css.header}>
        <nav>
            <ul className={css.navList}>
                {navigationItems.map(({href, text}) => (
                    <li className={css.navListItem} key={href}>
                        <NavLink className={css.navLink} to={href}>{text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    </div>
  )
};



