import { NavLink } from 'react-router-dom';
import { Nav } from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </Nav>
  );
};
