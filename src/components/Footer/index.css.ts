import { breakpoint, color, width } from '@/utils/constants'
import { style, styleVariants } from '@vanilla-extract/css'

const containerBase = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: color.text,
  paddingInline: width.siderail.mobile,
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      paddingInline: width.siderail.tablet,
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      paddingInline: width.siderail.pc,
    },
  },
}

export const container = styleVariants({
  default: [containerBase],
  expanded: [
    containerBase,
    {
      marginTop: -40,
      paddingTop: 40,
      '@media': {
        [`(min-width: ${breakpoint.pc}px)`]: {
          marginTop: -50,
          paddingTop: 50,
        },
      },
    },
  ],
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
  color: color.white,
  transition: 'background-color 0.3s, color 0.3s',
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      width: 'fit-content',
    },
    '(hover: hover)': {
      ':hover': {
        backgroundColor: color.white,
        color: color.text,
      },
    },
  },
})

export const contactText = style({
  fontSize: 16,
  fontWeight: 'bold',
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
  border: `1px solid ${color.text}`,
  boxShadow: `0 2px 0 ${color.shadow}`,
  translate: 'transformY(0)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '@media': {
    '(hover: hover)': {
      selectors: {
        [`a:hover &`]: {
          transform: 'translateY(2px)',
          boxShadow: `0 0 0 ${color.shadow}`,
        },
      },
    },
  },
})
