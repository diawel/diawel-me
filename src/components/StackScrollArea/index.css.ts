import { style } from '@vanilla-extract/css'

export const frame = style({
  height: 'fit-content',
  position: 'sticky',
})

export const overlay = style({
  position: 'relative',
  transform: 'translateZ(0)',
  zIndex: 1,
})
