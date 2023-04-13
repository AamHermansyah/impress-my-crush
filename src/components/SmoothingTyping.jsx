import { motion as m } from 'framer-motion'

const staggerContainer = (staggerChildren = .1, delay = 0.5) => ({
  initial: {},
  animate: {
    transition: {
      delay,
      staggerChildren
    }
  }
})

const letterAnimate = (duration = 0.1) => ({
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration
    }
  }
})

export const SmoothTypingText = ({ stagger = 0.1, text, textStyles }) => {
  return (
    <m.p
      variants={staggerContainer(stagger)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${textStyles} whitespace-pre-line`}>
      {text.split("").map((letter, index) => (
        <m.span
          key={`${letter}-${index}`}
          variants={letterAnimate()}
        >
          {letter}
        </m.span>
      )
      )}
    </m.p>
  )
}