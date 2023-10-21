import {
  ListItem,
  ImageBlock,
  Image,
  InfoBlock,
  Accent,
  Icon,
  AboutCar,
  CarBrand,
  CarPrice,
} from 'components/AdvertCard/AdvertCard.styled';
import heart from '../../assets/heart.svg';
import heartActive from '../../assets/heartActive.svg';
import { useEffect, useState } from 'react';
import { addFavorites, deleteFavorites } from 'redux/adverts/advertsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from 'redux/adverts/selectors';
import { Modal } from 'components/Modal/Modal';
import unknown from '../../assets/unknown.png';

export const AdvertsCard = ({
  id,
  img,
  make,
  model,
  rentalPrice,
  rentalCompany,
  type,
  accessories,
}) => {
  const { favorites } = useSelector(selectAdverts);
  const dispatch = useDispatch();
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const favorite = favorites.find(item => item.id === id);
    if (favorite !== undefined) {
      setIsLikeActive(true);
    }
  }, [favorites, id]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ListItem>
      <ImageBlock>
        <Image src={img || unknown} alt={make} />
        <Icon
          onClick={() => {
            if (!isLikeActive) {
              setIsLikeActive(true);
              dispatch(
                addFavorites({
                  id,
                  img,
                  make,
                  model,
                  rentalPrice,
                  rentalCompany,
                  type,
                  accessories,
                })
              );
            }
            if (isLikeActive) {
              setIsLikeActive(false);
              dispatch(deleteFavorites(id));
            }
          }}
        >
          {isLikeActive ? (
            <img src={heartActive} width={18} alt="like" />
          ) : (
            <img src={heart} width={18} alt="like" />
          )}
        </Icon>
      </ImageBlock>
      <InfoBlock>
        <CarBrand>
          {make} <Accent>{model}</Accent>
        </CarBrand>
        <CarPrice>{rentalPrice}</CarPrice>
      </InfoBlock>
      <AboutCar>
        <span>{rentalCompany} </span> <span>{type}</span>
        <span>{accessories[0]}</span>
      </AboutCar>

      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Load more
      </button>
      {isOpen && (
        <Modal closeModal={closeModal} id={id} img={img} model={model} />
      )}
    </ListItem>
  );
};