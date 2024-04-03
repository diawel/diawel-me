import { color } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const frame = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  zIndex: 1,
  backgroundColor: color.white,
})
