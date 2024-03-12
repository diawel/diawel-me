import { color } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const container = style({
  flexShrink: 0,
  height: 32,
  borderRadius: 16,
  padding: '0 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 14,
  fontWeight: 'bold',
  border: `1px solid ${color.text}`,
  width: 'fit-content',
})
