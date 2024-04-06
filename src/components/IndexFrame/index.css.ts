import { styleVariants } from '@vanilla-extract/css'

export const frame = styleVariants({
  open: {
    opacity: 1,
    transition: 'opacity 0.3s',
  },

  close: {
    opacity: 0.3,
    transition: 'opacity 0s',
  },
})
