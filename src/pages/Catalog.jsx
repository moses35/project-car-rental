import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { getAdverts } from 'redux/adverts/operationsAdverts';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { selectAdverts } from 'redux/adverts/selectors';
import { clearItems } from 'redux/adverts/advertsSlice';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const valueRef = useRef(true);
  const { items } = useSelector(selectAdverts);
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    valueRef.current = true;
  };
  useEffect(() => {
    if (valueRef.current) {
      dispatch(getAdverts(page));
      valueRef.current = false;
    }
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(clearItems());
    };
  }, []);

  return <AdvertsList adverts={items} loadMore={loadMore} />;
};

export default CatalogPage;
