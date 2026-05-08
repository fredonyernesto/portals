import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return(
    <div style={{ background: "#1a1a1a", minHeight: "100vh", color: "#f5f5f5", fontFamily: "system-ui, sans-serif"}}>
      <nav style={{ background: "#111", padding: "1rem 2rem", display: "flex", gap: "2rem", alignItems: "center"}}>
      <strong style={{ color: "#e8a400", fontSize: "1.25rem"}}>⚡ Portals</strong>
      <span>Movies</span>
      <span>Games</span>
      <span>Audio</span>
      <span>Art</span>
      </nav>
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem"}}>
        <h1>Welcome to Portals</h1>
        <p>A community platform for creators</p>
      </main>
    </div>
  );
}

export default App;
