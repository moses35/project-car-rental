import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { getAdverts } from 'redux/adverts/operationsAdverts';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { selectAdverts } from 'redux/adverts/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const valueRef = useRef(true);

  useEffect(() => {
    if (valueRef.current) {
      dispatch(getAdverts());
      valueRef.current = false;
    }
  }, [dispatch]);

  const { items } = useSelector(selectAdverts);

  return <AdvertsList adverts={items} />;
};

export default CatalogPage;
