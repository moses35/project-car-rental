import {
  List,
  LoadMoreBtn,
  ListBlock,
  NothingFound,
} from 'components/AdvertsList/AdvertsList.styled';
import { AdvertsCard } from 'components/AdvertCard/AdvertCard';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAdverts } from 'redux/adverts/selectors';
import { useLocation } from 'react-router-dom';

export const AdvertsList = ({ adverts, loadMore }) => {
  const { countOfItems, isHidden } = useSelector(selectAdverts);
  const location = useLocation();
  const [isVisibleButton, setIsVisibleButton] = useState(true);

  useEffect(() => {
    if (
      location.pathname === '/favorites' ||
      countOfItems === 0 ||
      countOfItems < 8 ||
      isHidden === false
    ) {
      setIsVisibleButton(false);
    }
  }, [countOfItems, setIsVisibleButton, location, isHidden]);

  return (
    <>
      {adverts.length > 0 ? (
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
                year,
                address,
                fuelConsumption,
                engineSize,
                description,
                functionalities,
                rentalConditions,
                mileage,
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
                  year={year}
                  address={address}
                  fuelConsumption={fuelConsumption}
                  engineSize={engineSize}
                  description={description}
                  functionalities={functionalities}
                  rentalConditions={rentalConditions}
                  mileage={mileage}
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
      ) : (
        <NothingFound>Nothing found...</NothingFound>
      )}
    </>
  );
};
