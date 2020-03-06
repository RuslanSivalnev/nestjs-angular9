interface IWeatherApiConf {
  apiKey: string;
  url: string;
}

const WeatherApiConf: IWeatherApiConf = {
  apiKey: '409de8b3ca4ca8c36802970e823bc1aa',
  url: 'http://api.openweathermap.org/data/2.5/weather',
};

export { WeatherApiConf, IWeatherApiConf };
