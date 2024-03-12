import { breakpoint, color } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const container = style({
  height: 40,
  borderRadius: 20,
  padding: '0 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 14,
  fontWeight: 'bold',
  gap: 8,
  border: `1px solid ${color.text}`,
  boxShadow: `0 2px 0 ${color.shadow}`,
  width: 'fit-content',
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      height: 44,
      borderRadius: 22,
      fontSize: 16,
      padding: '0 24px',
    },
  },
})
