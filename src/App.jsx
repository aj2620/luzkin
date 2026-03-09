import './App.css'
import ColorBends from './components/colorbends/ColorBends';
import Shuffle from './components/shuffle/Shuffle';
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
          <Shuffle
            text="LUZKIN"
            className="title"
            tag="h1"
            shuffleDirection="right"
            duration={2.5}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.4}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover
            respectReducedMotion={true}
            loop
            loopDelay={0.9}
          />
          <p className="subtitle">coming soon</p>
        </div>
      </div>
    </div>
  )
}

export default App
