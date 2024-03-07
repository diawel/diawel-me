import { globalStyle, style } from '@vanilla-extract/css'

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
})

export const body = style({
  fontFamily: '"hiragino-kaku-gothic-pron", sans-serif',
})
