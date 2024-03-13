import { keyframes } from '@vanilla-extract/css'

export const blurIn = keyframes({
  from: {
    filter: 'blur(5px)',
    opacity: 0,
  },
  to: {
    filter: 'blur(0)',
    opacity: 1,
  },
})

export const blurRiseIn = keyframes({
  from: {
    filter: 'blur(5px)',
    transform: 'translateY(4px)',
    opacity: 0,
  },
  to: {
    filter: 'blur(0)',
    transform: 'translateY(0)',
    opacity: 1,
  },
})
