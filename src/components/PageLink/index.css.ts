import { style } from '@vanilla-extract/css'

export const link = style({
  width: 'fit-content',
  color: 'inherit',
  textDecoration: 'underline',
  ':hover': {
    textDecoration: 'none',
  },
})
