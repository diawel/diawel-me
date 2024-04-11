import { styleVariants } from '@vanilla-extract/css'

export const frame = styleVariants({
  active: {
    opacity: 1,
    transition: 'opacity 0.3s',
  },

  inactive: {
    opacity: 0.3,
    transition: 'opacity 0s',
  },
})
