import './App.css'
import { motion } from 'motion/react'

function App() {

  const maskContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const maskPath = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      <div className='blank' />

      <motion.svg viewBox="0 0 100 100" width="100" height="100">
        {/* 文字(M)の形をしたパス */}
        <motion.path
          d="M 10 90 L 10 10 L 50 50 L 90 10 L 90 90"
          fill="transparent" // 塗りは透明にして線だけを見せる
          stroke="#333"      // なぞる線の色
          strokeWidth="4"    // 線の太さ
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: [.81, .04, .72, .09] }}
        />
      </motion.svg>

    </>
  )
}

export default App
