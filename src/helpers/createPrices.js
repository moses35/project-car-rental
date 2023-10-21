export const createPrices = () => {
  const options = [];
  options.push(
    <option key={1} value="">
      To $
    </option>
  );
  for (let i = 10; i <= 500; i += 10) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return options;
};
