export async function fetchCryptos(filters) {
  const { search, tags, orderBy, limit } = filters;
  const headers = {
    "X-RapidAPI-Key": "dc18d3c64emsh3dc2158116ec753p1cfb2bjsn50506094019d",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  };
  const response = await fetch(
    `https://coinranking1.p.rapidapi.com/coins?tiers%5B0%5D=1&search=${search}&tags=${tags}&orderBy=${orderBy}&limit=${limit}`,
    {
      headers: headers,
    }
  );
  const results = await response.json();
  const finalResults = results.data;
  const ultraFinal = finalResults.coins;

  return ultraFinal;
}
export const updateSearchParams = (type, value) => {
  // Esto crea un objeto con los valores actuales de la busqueda url, lo que viene despues de la ?
  const searchParams = new URLSearchParams(window.location.search);
  // seteamos el parametro con el tipo de filtro y el valor
  searchParams.set(type, value);
  // Creamos la nueva ruta con los parametros actualizados
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  // retornamos la ruta nueva con los parametros actualizados
  return newPathname;
};
