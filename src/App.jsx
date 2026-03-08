import './App.css'
import ColorBends from './components/colorbends/ColorBends';
import logo from './assets/logo1.webp';

function App() {
  return (
    <div className="container">
      <ColorBends
        className="cb-backdrop"
        colors={["#ff3030ff", "#ff821bff", "#0051ffff"]}
        rotation={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
        transparent
        autoRotate={0}
      />
      <div className="content">
        <div className="glass-card">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title">LUZKIN</h1>
          <p className="subtitle">coming soon</p>
        </div>
      </div>
    </div>
  )
}

export default App
