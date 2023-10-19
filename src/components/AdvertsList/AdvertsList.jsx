import { List } from 'components/AdvertsList/AdvertsList.styled';
import { AdvertsCard } from 'components/AdvertCard/AdvertCard';

export const AdvertsList = ({ adverts }) => {
  return (
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
  );
};
