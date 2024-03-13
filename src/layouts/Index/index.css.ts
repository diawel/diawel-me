import { breakpoint } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const upperContainer = style({
  borderRadius: '0 0 40px 40px',
  overflow: 'hidden',
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      borderRadius: '0 0 50px 50px',
    },
  },
})
