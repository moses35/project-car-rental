import { Nav, Link } from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
    </Nav>
  );
};
