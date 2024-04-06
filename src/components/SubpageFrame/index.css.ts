import { color } from '@/utils/constants'
import { style, styleVariants } from '@vanilla-extract/css'

const frameBase = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  overscrollBehavior: 'contain',
  zIndex: 1,
  backgroundColor: color.white,
})

export const frame = styleVariants({
  open: [
    frameBase,
    {
      transform: 'translateY(0)',
      opacity: 1,
      transition: 'transform 0.3s ease-out, opacity 0.3s',
    },
  ],
  close: [
    frameBase,
    {
      pointerEvents: 'none',
      transform: 'translateY(4px)',
      opacity: 0,
      transition: 'transform 0s ease-out, opacity 0s',
    },
  ],
})
