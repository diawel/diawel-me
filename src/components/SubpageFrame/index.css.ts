import { color } from '@/utils/constants'
import { style, styleVariants } from '@vanilla-extract/css'

const frameBase = style({
  position: 'fixed',
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  zIndex: 1,
  backgroundColor: color.white,
})

export const frame = styleVariants({
  open: [
    frameBase,
    {
      top: 0,
      opacity: 1,
      filter: 'blur(0)',
      transition: 'top 0.3s ease-out, opacity 0.3s ease-out',
    },
  ],
  close: [
    frameBase,
    {
      pointerEvents: 'none',
      top: 4,
      opacity: 0,
      filter: 'blur(2px)',
      transition: 'top 0s, opacity 0s',
    },
  ],
})
