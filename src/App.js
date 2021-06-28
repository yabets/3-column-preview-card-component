import luxury from './images/icon-luxury.svg';
import sedans from './images/icon-sedans.svg';
import suvs from './images/icon-suvs.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <>
    <div className="App">
      <Card 
        color="Orange" 
        title="Sedans" 
        body="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip."
        icon={sedans}
  />
      <Card color="Cyan" title="SUVs" body="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures." 
  icon={suvs}/>
      <Card color="DarkCyan" title="Luxury" body="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style." 
  icon={luxury}/>
    </div>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="github.com/yabets">Yabets</a>.
    </div>
    </>

  );
}

export default App;
