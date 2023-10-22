export const adressSplit = address => {
  const words = address.split(', ');
  if (words.length >= 2) {
    const lastTwoWords = words.slice(-2);
    return lastTwoWords;
  }
};
