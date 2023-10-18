import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
`;

export const Nav = styled.nav`
  margin-bottom: 20px;
  padding: 30px 0;
  max-width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavItemLink = styled(NavLink)`
padding: 10px;
color: white;

border: 1px solid black;
border-radius: 15px;

cursor: pointer;

text-decoration: none;
transition: all 350ms linear;

&.active {
    border: 1px solid white;
  background-color: #000;
  color: white;
  border-radius: 15px;
}

  :hover: {
    border: 1px solid white;
  background-color: #000;
  color: white;
  border-radius: 15px;
  }

  :focus {
    border: 1px solid white;
  background-color: #000;
  color: white;
  border-radius: 15px;
  }
`;