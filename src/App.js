import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import Location from './components/Location';
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: "puebla"});
    console.log(data)
  };
  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-lg">
      <TopButtons />
      <Inputs />
      <Location />
      <Temperature />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
      <h1> Tenki</h1>
    </div>
  );
}

export default App;
