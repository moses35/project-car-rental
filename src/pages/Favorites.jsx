import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { useSelector } from 'react-redux';
import { selectAdverts } from 'redux/adverts/selectors';

const FavoritesPage = () => {
  const { favorites } = useSelector(selectAdverts);

  return <AdvertsList adverts={favorites} />;
};

export default FavoritesPage;
