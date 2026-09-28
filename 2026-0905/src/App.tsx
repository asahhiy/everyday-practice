import './App.css'
import { useState } from 'react'
import AnimatedLogo from './AnimatedLogo'

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <header className={`site-header ${introComplete ? 'is-ready' : ''}`}>
      <AnimatedLogo
        isHeader={introComplete}
        onDotAnimationComplete={() => window.setTimeout(() => setIntroComplete(true), 550)}
      />
      {introComplete && <span className="site-name"></span>}
    </header>
  )
}

export default App
