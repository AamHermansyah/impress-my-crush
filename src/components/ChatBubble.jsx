import { motion as m } from 'framer-motion'
import { memo } from 'react';

const variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  transition: {
    duration: .5,
    type: "spring",
    stiffness: 100
  }
}

const ChatBubble = ({ children, animate }) => {
  return (
    <m.div
      variants={variants}
      initial="initial"
      animate={animate}
      className="absolute sm:min-w-[400px] max-w-[600px] font-mochiy -top-4 sm:top-10 left-4 sm:left-[90%] p-4 sm:p-6 bg-white rounded-t-lg rounded-bl-lg sm:rounded-bl-none rounded-br-lg">
      <span className="absolute -bottom-[10px] sm:bottom-0 right-0 sm:-left-[10px] border-[10px] border-transparent border-t-0 border-b-[20px] border-b-white rotate-180 sm:rotate-0" />
      <p className="text-[10px] sm:text-base whitespace-pre-wrap">
        {children}
      </p>
    </m.div>
  )
}

export default memo(ChatBubble);
