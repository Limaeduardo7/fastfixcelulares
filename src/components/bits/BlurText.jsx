import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * React Bits – BlurText
 * Animates each word with blur + opacity on mount / scroll-into-view.
 */
export default function BlurText({
  text = '',
  className = '',
  delay = 0.05,
  threshold = 0.3,
  renderWord,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px', amount: threshold })
  const words = text.split(' ')

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ marginRight: '0.28em' }}
          initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{ duration: 0.55, delay: delay * i, ease: [0.25, 0.46, 0.45, 0.94] }}
          aria-hidden="true"
        >
          {renderWord ? renderWord(word, i) : word}
        </motion.span>
      ))}
    </span>
  )
}
