export const filteredCars = (filter, items, allAdverts) => {
  if (filter === null) {
    return items;
  }
  let cars = null;

  cars = allAdverts.filter(item => item.make === filter.brand);
  cars = cars.filter(item => {
    const numberRentalPrice = parseFloat(
      item.rentalPrice.replace(/[^0-9.-]+/g, '')
    );

    return numberRentalPrice <= Number(filter.price);
  });
  cars = cars.filter(item => {
    return (
      Number(item.mileage) >= Number(filter.from) &&
      Number(item.mileage) <= Number(filter.to)
    );
  });

  return cars;
};
