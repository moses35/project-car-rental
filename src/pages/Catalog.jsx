import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { getAdverts } from 'redux/adverts/operationsAdverts';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { selectAdverts } from 'redux/adverts/selectors';
import { clearItems } from 'redux/adverts/advertsSlice';
import { Filter } from 'components/Filter/Filter';
import { filteredCars } from 'helpers/filteredCars';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const valueRef = useRef(true);

  const { items, filter, allAdverts } = useSelector(selectAdverts);

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
  }, [dispatch]);

  let cars = filteredCars(filter, items, allAdverts);

  return (
    <>
      <Filter />
      {cars && <AdvertsList adverts={cars} loadMore={loadMore} />}
    </>
  );
};

export default CatalogPage;
