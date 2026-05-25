import { misRetratos } from './datosArte';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Art & Pixel Showcase</h1>
        <p>Una ventana a la precisión visual y el detalle</p>
      </header>

      <main className="portfolio-grid">
        {misRetratos.map((retrato) => (
          <div key={retrato.id} className="art-card">
            <div className="art-image-container">
              <img src={retrato.imagen} alt={retrato.titulo} />
            </div>
            <div className="art-info">
              <h3>{retrato.titulo}</h3>
              <span className="badge">{retrato.tecnica}</span>
              <p>{retrato.descripcion}</p>
              <small>Año: {retrato.año}</small>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;