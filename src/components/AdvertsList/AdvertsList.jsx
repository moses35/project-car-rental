import {
  List,
  LoadMoreBtn,
  ListBlock,
} from 'components/AdvertsList/AdvertsList.styled';
import { AdvertsCard } from 'components/AdvertCard/AdvertCard';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAdverts } from 'redux/adverts/selectors';
import { useLocation } from 'react-router-dom';

export const AdvertsList = ({ adverts, loadMore }) => {
  const { countOfItems } = useSelector(selectAdverts);
  const location = useLocation();
  const [isVisibleButton, setIsVisibleButton] = useState(true);

  useEffect(() => {
    if (
      location.pathname === '/favorites' ||
      countOfItems === 0 ||
      countOfItems < 8
    ) {
      setIsVisibleButton(false);
    }
  }, [countOfItems, setIsVisibleButton, location]);

  return (
    <ListBlock>
      <List>
        {adverts.map(
          ({
            id,
            make,
            model,
            img,
            rentalPrice,
            rentalCompany,
            type,
            accessories,
          }) => (
            <AdvertsCard
              key={id}
              id={id}
              make={make}
              model={model}
              img={img}
              rentalPrice={rentalPrice}
              rentalCompany={rentalCompany}
              type={type}
              accessories={accessories}
            />
          )
        )}
      </List>
      {isVisibleButton && (
        <LoadMoreBtn
          onClick={() => {
            loadMore();
          }}
          width={20}
        >
          Load more
        </LoadMoreBtn>
      )}
    </ListBlock>
  );
};
