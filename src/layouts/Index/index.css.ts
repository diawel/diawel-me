import { breakpoint, color } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const upperContainer = style({
  borderRadius: '0 0 40px 40px',
  backgroundColor: color.white,
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      borderRadius: '0 0 50px 50px',
    },
  },
})
