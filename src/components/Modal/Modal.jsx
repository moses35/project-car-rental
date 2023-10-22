import { Overlay, ModalWindow } from 'components/Modal/Modal.styled';
import { ModalCard } from 'components/ModalCard/ModalCard';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({
  closeModal,
  id,
  img,
  model,
  make,
  year,
  address,
  fuelConsumption,
  engineSize,
  type,
  description,
  functionalities,
  accessories,
  rentalConditions,
  mileage,
  rentalPrice,
}) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    const handaleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handaleKeyDown);

    return () => {
      window.removeEventListener('keydown', handaleKeyDown);
    };
  }, [closeModal]);

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <ModalCard
          key={id}
          id={id}
          closeModal={closeModal}
          img={img}
          model={model}
          make={make}
          year={year}
          address={address}
          fuelConsumption={fuelConsumption}
          engineSize={engineSize}
          type={type}
          description={description}
          functionalities={functionalities}
          accessories={accessories}
          rentalConditions={rentalConditions}
          mileage={mileage}
          rentalPrice={rentalPrice}
        />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
