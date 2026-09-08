import { motion, useMotionValue, useTransform, animate } from "motion/react"
import { useEffect } from "react"
import './App.css'

function App() {

  const ySpring = useMotionValue(-800)
  const yBounce = useTransform(ySpring, (v) => -Math.abs(v))


  useEffect(() => {
    animate(ySpring, 0, {
      type: "spring",
      bounce: 0.7,
      duration: 1.6
    })
  }, [ySpring])

  return (
    <>
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "flex-end", paddingBottom: "100px" }}>
        <motion.div
          style={{
            y: yBounce, // 反転処理を通した値を実際のy座標に適用
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "black",
          }}
        />
      </div>
    </>
  )
}

export default App
