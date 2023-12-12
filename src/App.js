import dashboardImage from './images/dashboard-image.webp';
import underConstruction from './images/under-construction.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <img src={dashboardImage} className="App-dashboard-image" alt="dashboard" />
        <div className='App-info'>
          <h1 className='App-h1'>
            ROL-BOX
          </h1>
          <p className="App-text">
            Inovativna rješenja za Vaš dom
          </p>
        </div>
        <p>
          Kontakt: 095 895 4725
        </p>
      </div>
      <img src={underConstruction} className="App-under-construction" alt="under-construction" />
    </div>
  );
}

export default App;
