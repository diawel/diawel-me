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
  marginBottom: 2,
  width: 'fit-content',
  transform: 'translateY(0)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      height: 44,
      borderRadius: 22,
      fontSize: 16,
      padding: '0 24px',
    },
    '(hover: hover)': {
      ':hover': {
        transform: 'translateY(2px)',
        boxShadow: `0 0 0 ${color.shadow}`,
      },
    },
  },
})

export const arrow = style({
  transform: 'translateY(0) rotate(180deg)',
  transition: 'transform 0.3s',
  '@media': {
    '(hover: hover)': {
      selectors: {
        [`${container}:hover &`]: {
          transform: 'translateY(4px) rotate(180deg)',
        },
      },
    },
  },
})
