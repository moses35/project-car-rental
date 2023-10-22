import {
  Card,
  ImgBlock,
  Img,
  Icon,
  AboutBlock,
  Descreption,
  Accessories,
  AccessoriesBlock,
  RentalInfo,
  RentalBtn,
  Accent,
} from './ModalCard.styled';

import { AboutCar, CarBrand } from 'components/AdvertCard/AdvertCard.styled';

import close from '../../assets/close.svg';
import { adressSplit } from 'helpers/addressSplit';
import { formatMileage } from 'helpers/formatMileage';

export const ModalCard = ({
  id,
  img,
  model,
  year,
  make,
  closeModal,
  fuelConsumption,
  engineSize,
  address,
  type,
  description,
  functionalities,
  accessories,
  rentalConditions,
  mileage,
  rentalPrice,
}) => {
  const city = adressSplit(address);
  const rental = rentalConditions.split('\n');
  const numberRentalPrice = parseFloat(rentalPrice.replace(/[^0-9.-]+/g, ''));
  const formatedMileage = formatMileage(mileage);

  return (
    <Card>
      <div>
        <Icon onClick={() => closeModal()}>
          <img src={close} width={24} alt="close" />
        </Icon>
        <ImgBlock>
          <Img src={img} alt={model} />
        </ImgBlock>
        <AboutBlock>
          <CarBrand>
            {make} <Accent>{model}</Accent>, {year}
          </CarBrand>
          <AboutCar>
            <span>{city[0]}</span>
            <span>{city[1]}</span>
            <span>Id: {id}</span>
            <span>Year: {year}</span>
            <span>Type: {type}</span>
            <span>Fuel Consumption: {fuelConsumption}</span>
            <span>EngineSize: {engineSize}</span>
          </AboutCar>
        </AboutBlock>
        <Descreption>{description}</Descreption>
        <AccessoriesBlock>
          <Accessories>Accessories and functionalities:</Accessories>
          <AboutCar>
            <span>{accessories[0]}</span>
            <span>{accessories[1]}</span>
            <span>{accessories[2]}</span>
            <span> {functionalities[0]}</span>
            <span>{functionalities[1]}</span>
            <span>{functionalities[2]}</span>
          </AboutCar>
        </AccessoriesBlock>
        <AccessoriesBlock>
          <Accessories>Rental Conditions:</Accessories>
          <RentalInfo>
            <span>{rental[0]}</span>
            <span>{rental[1]}</span>
            <span>{rental[2]}</span>
            <span>
              Mileage: <Accent> {formatedMileage}</Accent>
            </span>
            <span>
              Price: <Accent> {numberRentalPrice}$</Accent>
            </span>
          </RentalInfo>
        </AccessoriesBlock>
        <RentalBtn>Rental car</RentalBtn>
      </div>
    </Card>
  );
};
