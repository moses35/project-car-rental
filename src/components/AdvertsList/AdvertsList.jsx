import {
  List,
  ListItem,
  ImageBlock,
  Image,
  InfoBlock,
  Accent,
} from 'components/AdvertsList/AdvertsList.styled';

import { useDispatch } from 'react-redux';

export const AdvertsList = ({ adverts }) => {
  const dispatch = useDispatch();

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
          <ListItem key={id}>
            <ImageBlock>
              <Image src={img} width={100} alt={make} />
            </ImageBlock>
            <InfoBlock>
              <p>
                {make} <Accent>{model}</Accent>
              </p>
              <span>{rentalPrice}</span>
            </InfoBlock>
            <p>
              {rentalCompany} | {type} | {accessories[0]}
            </p>

            <button onClick={() => null}>Load more</button>
          </ListItem>
        )
      )}
    </List>
  );
};
