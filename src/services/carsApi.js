const BASE_URL = "https://64b3c9530efb99d862685f21.mockapi.io/api/v1";

export const getAdverts = async () => {
  const data = await fetch(`${BASE_URL}/adverts`);
  return await data.json();
};
