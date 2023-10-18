import css from './Header.module.css';
import { NavItemLink } from './Header.styled';

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
                        <NavItemLink className={css.navLink} 
                        to={href}
                        activeClassName={css.activeNavLink}>{text}</NavItemLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    </div>
  )
};



