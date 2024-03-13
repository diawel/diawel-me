import { breakpoint, color, width } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: color.text,
  padding: `0 ${width.siderail.mobile}px`,
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      padding: `0 ${width.siderail.tablet}px`,
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      padding: `0 ${width.siderail.pc}px`,
    },
  },
})

export const content = style({
  width: '100%',
  maxWidth: width.content.mobile,
  display: 'flex',
  flexDirection: 'column',
  gap: 48,
  padding: '60px 0',
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      maxWidth: width.content.pc,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '72px 0',
    },
  },
})

export const name = style({
  width: 'fit-content',
  height: 28,
})

export const contactBox = style({
  width: '100%',
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 48,
  border: `1px solid ${color.white}`,
  borderRadius: 48,
  paddingLeft: 32,
  paddingRight: 24,
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      width: 'fit-content',
    },
  },
})

export const contactText = style({
  fontSize: 16,
  fontWeight: 'bold',
  color: color.white,
  lineHeight: 1.5,
})

export const contactButtonBox = style({
  display: 'flex',
  gap: 14,
})

export const contactButton = style({
  width: 46,
  height: 46,
  borderRadius: '50%',
  backgroundColor: color.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 0 ${color.shadow}`,
})
