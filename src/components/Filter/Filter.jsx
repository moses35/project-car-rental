import { useForm } from 'react-hook-form';
import brands from '../../makes.json';
import { createPrices } from 'helpers/createPrices';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/adverts/advertsSlice';
import {
  Form,
  SelectPrice,
  SelectBrand,
  LabelBlock,
  InputFrom,
  InputTo,
  Button,
} from 'components/Filter/Filter.styled';

import { selectAdverts } from 'redux/adverts/selectors';
import { getAllAdverts } from 'redux/adverts/operationsAdverts';

export const Filter = () => {
  const { allAdverts } = useSelector(selectAdverts);
  createPrices();
  const dispatch = useDispatch();
  const options = createPrices();
  const {
    register,
    handleSubmit,

    reset,
  } = useForm({
    defaultValues: { price: '' },
  });

  return (
    <>
      <Form
        onSubmit={handleSubmit(data => {
          const { price, brand, from, to } = data;
          if (price === '' || brand === '' || from === '' || to === '') {
            return alert('All fields must be completed');
          }
          dispatch(addFilter(data));
          reset();
        })}
      >
        <LabelBlock>
          <label htmlFor="brand">Car brand</label>
          <SelectBrand {...register('brand')}>
            <option key={1} value="">
              Enter the text
            </option>

            {brands.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </SelectBrand>
        </LabelBlock>
        <LabelBlock>
          <label htmlFor="price">Price/ 1 hour</label>
          <SelectPrice {...register('price')}>{options}</SelectPrice>
        </LabelBlock>
        <LabelBlock>
          <label htmlFor="from">Сar mileage / km</label>
          <InputFrom
            type="number"
            {...register('from')}
            id="mile1"
            min={0}
            max={5000}
            placeholder="From"
          />
        </LabelBlock>

        <InputTo
          type="number"
          {...register('to')}
          id="mile2"
          min={0}
          max={10000}
          placeholder="To"
        />

        <Button
          type="submit"
          onClick={() => {
            if (allAdverts.length === 0) {
              dispatch(getAllAdverts());
            }
          }}
        >
          Search
        </Button>
      </Form>
    </>
  );
};
