import { color } from '@/utils/constants'
import { globalStyle, style, styleVariants } from '@vanilla-extract/css'

const frameBase = style({
  position: 'fixed',
  left: 0,
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  zIndex: 1,
  backgroundColor: color.white,
})

export const frame = styleVariants({
  active: [
    frameBase,
    {
      top: 0,
      opacity: 1,
      transition:
        'top 0.3s cubic-bezier(0, .6, .4, 1), opacity 0.3s cubic-bezier(0, .6, .4, 1)',
    },
  ],
  inactive: [
    frameBase,
    {
      pointerEvents: 'none',
      top: 6,
      opacity: 0,
      transition: 'top 0s, opacity 0s',
    },
  ],
})

globalStyle(`body:has(${frame.active})`, {
  overflow: 'hidden',
})
