const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (TERMO_DE_BUSCA) => {
  const url = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.length === 0) {
    return alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = async (URL_CIDADE) => {
  const url = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${URL_CIDADE}`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    name: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: data.location.url,
  };
};
