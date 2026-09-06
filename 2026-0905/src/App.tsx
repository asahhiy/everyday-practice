import './App.css'
import { motion } from 'motion/react'

const maskContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const maskPath = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
}

const maskStroke = {
  hidden: { pathLength: 0, strokeOpacity: 0 },
  visible: {
    pathLength: 1,
    strokeOpacity: 1,
    transition: {
      pathLength: { duration: 0.8, ease: 'easeInOut' },
      strokeOpacity: { duration: 0.1 },
    },
  },
}

function App() {
  return (
    <svg viewBox="0 0 942.4 183.95" width="100%">
      {/* --- 第1層：マスク（なぞる白い線） --- */}
      <defs>
        <mask id="text-mask">
          <motion.g
            variants={maskContainer}
            initial="hidden"
            animate="visible"
          >
            {/* u */}
            <motion.polyline
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="21"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="10.5,12.26 10.5,110.85 15.21,115.61 43.09,115.17 47.76,111.4 48.34,12.26"
            />
            {/* d */}
            <motion.polygon
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="21"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="79.59,21.29 114.5,21.67 117.86,24.78 118,111.44 113.88,115.61 79.75,115.61 79.59,21.29"
            />
            {/* o-1 */}
            <motion.polygon
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="168.5,21.29 181.81,21.29 187.74,27.46 187.88,111.33 184.14,115.61 155.2,115.61 148.9,110.17 150.07,26.84 153.1,21.29 168.5,21.29"
            />
            {/* n */}
            <motion.polyline
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="218.69,126.97 218.69,16.63 220.86,16.21 262.8,121.87 263.97,121.65 263.97,12.26"
            />
            {/* w */}
            <motion.polyline
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="23"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="290.58,7.94 311.51,126.05 336.21,17.84 341.88,17.83 359.7,121.3 364.3,119.07 387.28,9.47"
            />
            {/* o-2 */}
            <motion.polygon
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="430.56,22.46 447.64,22.46 449.79,25.09 449.94,112.5 445.29,116.22 417.56,116.22 412.22,111.27 412.12,28.01 415.16,22.46 430.56,22.46"
            />
            {/* r-topright */}
            <motion.polyline
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="485.05,21.49 516.1,21.49 520.8,27.21 522.84,62.14 519.78,68.68 485.05,72.15"
            />
            {/* r-left */}
            <motion.line
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinecap="butt"
              x1="481.78"
              y1="7.94"
              x2="481.78"
              y2="124.81"
            />
            {/* r-bottomright */}
            <motion.line
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinecap="butt"
              x1="510.58"
              y1="72.15"
              x2="521.72"
              y2="128.31"
            />
            {/* k-left */}
            <motion.line
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinecap="butt"
              x1="551.03"
              y1="12.26"
              x2="551.03"
              y2="124.81"
            />
            {/* k-topright */}
            <motion.line
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinecap="butt"
              x1="600.95"
              y1="5.11"
              x2="551.03"
              y2="100.23"
            />
            {/* k-bottomright */}
            <motion.line
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinecap="butt"
              x1="573.1"
              y1="67.45"
              x2="601.08"
              y2="133.43"
            />
            {/* s */}
            <motion.polyline
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="662.37,48.66 663.8,29.45 656.65,21.49 630.3,21.49 624.58,25.78 624.37,62.34 630.3,68.53 659.1,68.06 662.25,73.05 661.71,112.79 658.08,116.48 630.3,116.48 622.94,112.39 622.94,91.35"
            />
            {/* c */}
            <motion.polyline
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="766.47,46.75 766.47,25.41 763.59,21.49 735.22,21.49 729.93,27.03 729.93,113.11 735.22,116.48 760.22,116.48 766.47,112.63 766.47,86.66"
            />
            {/* o-3 */}
            <motion.polygon
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="23"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="815.32,20.23 828.63,20.23 834.55,26.41 834.7,110.28 830.96,114.55 802.02,114.55 795.72,109.11 796.88,25.78 799.92,20.23 815.32,20.23"
            />
            {/* m */}
            <motion.polyline
              variants={maskStroke}
              fill="none"
              stroke="#fff"
              strokeWidth="22"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="867.45,124.81 867.45,14.22 869.74,13.79 899.43,89.8 928.09,15.33 931.4,16.04 931.4,128.01"
            />
          </motion.g>
        </mask>
      </defs>

      {/* --- 第2層：ベース文字 --- */}
      <g mask="url(#text-mask)">
        <g id="base-text">
          <path d="M57.41,115.63l-9.18,9.18H10.31l-9.18-9.18V12.26h18.81v92.26l2.07,2.07h14.51l2.07-2.07V12.26h18.81v103.37Z" />
          <path d="M118.12,12.26l9.18,9.18v94.18l-9.18,9.18h-47.68V12.26h47.68ZM106.13,106.44l2.07-2.22V32.4l-2.07-2.22h-16.73v76.27h16.73Z" />
          <path d="M196.6,21.44v94.18l-9.18,9.18h-37.91l-9.18-9.18V21.44l9.18-9.18h37.91l9.18,9.18ZM175.43,30.62h-14.22l-2.07,2.07v71.82l2.07,2.07h14.22l2.22-2.07V32.7l-2.22-2.07Z" />
          <path d="M209.63,124.81V12.26h20.29l24.43,69.01V12.26h18.81v112.55h-20.29l-24.43-69.01v69.01h-18.81Z" />
          <path d="M373.72,124.81h-23.69l-11.7-77.3-11.7,77.3h-23.69l-21.47-112.55h19.1l13.92,81.3,13.48-81.3h20.73l13.48,81.3,13.92-81.3h19.1l-21.47,112.55Z" />
          <path d="M459.76,21.44v94.18l-9.18,9.18h-37.91l-9.18-9.18V21.44l9.18-9.18h37.91l9.18,9.18ZM438.58,30.62h-14.22l-2.07,2.07v71.82l2.07,2.07h14.22l2.22-2.07V32.7l-2.22-2.07Z" />
          <path d="M472.79,124.81V12.26h48.57l9.18,9.18v50.35l-9.18,9.18,9.18,43.83h-18.51l-9.18-43.83h-11.25v43.83h-18.81ZM509.66,62.76l2.07-2.22v-27.84l-2.07-2.07h-18.07v32.13h18.07Z" />
          <path d="M581.18,62.02l26.95,62.79h-20.58l-17.77-41.46-8.89,16.29v25.17h-18.51V12.26h18.51v51.39l26.51-51.39h20.73l-26.95,49.76Z" />
          <path d="M652.41,44.69v-11.85l-2.22-2.22h-14.36l-2.22,2.22v23.4l2.22,2.22h26.36l9.18,9.18v47.98l-9.18,9.18h-38.21l-9.18-9.18v-23.25h18.81v12l2.22,2.22h14.36l2.22-2.22v-25.47l-2.22-2.22h-26.21l-9.18-9.18V21.44l9.18-9.18h38.21l9.18,9.18v23.25h-18.96Z" />
          <path d="M701.87,98.74l6.52,6.52v13.03l-6.52,6.52h-13.03l-6.52-6.52v-13.03l6.52-6.52h13.03Z" />
          <path d="M720.38,115.63V21.44l9.18-9.18h37.91l9.18,9.18v23.25h-18.81v-11.85l-2.22-2.22h-14.22l-2.22,2.22v71.38l2.22,2.22h14.22l2.22-2.22v-11.85h18.81v23.25l-9.18,9.18h-37.91l-9.18-9.18Z" />
          <path d="M844.48,21.44v94.18l-9.18,9.18h-37.91l-9.18-9.18V21.44l9.18-9.18h37.91l9.18,9.18ZM823.3,30.62h-14.22l-2.07,2.07v71.82l2.07,2.07h14.22l2.22-2.07V32.7l-2.22-2.07Z" />
          <path d="M904.31,100.67h-9.77l-18.21-51.83v75.97h-18.81V12.26h23.4l18.51,53.16,18.51-53.16h23.4v112.55h-18.81V48.84l-18.21,51.83Z" />
        </g>
      </g>
    </svg>
  )
}

export default App
