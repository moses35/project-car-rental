import { useForm } from 'react-hook-form';
import brands from '../../makes.json';
import { createPrices } from 'helpers/createPrices';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/adverts/advertsSlice';

export const Filter = () => {
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
      <form
        onSubmit={handleSubmit(data => {
          const { price, brand, from, to } = data;
          if (price === '' || brand === '' || from === '' || to === '') {
            return alert('Fields are empty');
          }
          dispatch(addFilter(data));
          console.log(data);
          reset();
        })}
      >
        <select {...register('brand')}>
          <option key={1} value="">
            Enter the text
          </option>

          {brands.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <select {...register('price')}>{options}</select>
        <label htmlFor="from">From</label>
        <input
          type="number"
          {...register('from')}
          id="mile1"
          min={0}
          max={5000}
        />

        <label htmlFor="to">To</label>
        <input
          type="number"
          {...register('to')}
          id="mile2"
          min={0}
          max={10000}
        />

        <button type="submit">Search</button>
      </form>
    </>
  );
};
