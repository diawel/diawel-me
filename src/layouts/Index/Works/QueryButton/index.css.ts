import { color } from '@/utils/constants'
import { style, styleVariants } from '@vanilla-extract/css'

export const container = style({
  flexShrink: 0,
})

const buttonBase = style({
  height: 32,
  borderRadius: 16,
  padding: '0 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 14,
  fontWeight: 'bold',
  border: `1px solid ${color.text}`,
  boxShadow: `0 2px 0 ${color.shadow}`,
  marginBottom: 2,
  width: 'fit-content',
})

export const button = styleVariants({
  active: [
    buttonBase,
    {
      backgroundColor: color.text,
      color: color.white,
    },
  ],
  inactive: [buttonBase],
})
