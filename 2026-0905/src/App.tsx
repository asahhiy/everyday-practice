import './App.css'
import { motion } from 'motion/react'

function App() {

  return (
    <>
      <div className='blank' />

      <motion.svg viewBox="0 0 300 100" width="300" height="100">
        <motion.text
          className="title"
          x={0}
          y={70}
          fontSize={36}
          stroke="#333"
          strokeWidth={1}
          initial={{
            pathLength: 0,
            fill: "rgba(51,51, 51, 0)"
          }}
          animate={{
            pathLength: 1,
            fill: "rgba(51,51,51,1)"
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            fill: { duration: 1, delay: 1.5 }
          }}
        >
          test motion
        </motion.text>
      </motion.svg>

    </>
  )
}

export default App
