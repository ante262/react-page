import dashboardImage from './images/dashboard-image.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dashboardImage} className="App-logo" alt="logo" />
        <p>
          ROL-BOX
        </p>
        <p className="App-link">
          Inovativna rješenja za Vaš dom
        </p>
        <p>
          Kontakt: 095 895 4725
        </p>
      </header>
    </div>
  );
}

export default App;
