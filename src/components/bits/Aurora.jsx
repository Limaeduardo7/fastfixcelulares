import { motion } from 'framer-motion'

/**
 * Aurora — apenas um acento sutil no topo-direito, sem manchar os cards.
 */
export default function Aurora() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-[15%] right-[-10%] w-[700px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,106,26,.09) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
