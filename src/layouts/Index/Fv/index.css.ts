import { breakpoint, color, width } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: color.gray,
  padding: `0 ${width.siderail.mobile}px`,
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      padding: `0 ${width.siderail.tablet}px`,
    },
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      padding: `0 ${width.siderail.pc}px`,
    },
  },
})

export const content = style({
  width: '100%',
  maxWidth: width.content.mobile,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      maxWidth: width.content.pc,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 60,
    },
  },
})

export const primary = style({
  padding: '60px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      gap: 40,
    },
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      gap: 60,
    },
  },
})

export const textBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
})

export const title = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 12,
})

export const label = style({
  fontSize: 16,
  fontWeight: 'bold',
  '@media': {
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      fontSize: 18,
    },
  },
})

export const name = style({
  height: 36,
  '@media': {
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      height: 52,
    },
  },
})

export const affiliation = style({
  fontSize: 16,
  fontWeight: 'bold',
  '@media': {
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      fontSize: 18,
    },
  },
})

export const affiliationLine = style({
  display: 'flex',
  gap: '0 8px',
  flexWrap: 'wrap',
})

export const anchorContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
})

export const secondary = style({
  position: 'relative',
  minWidth: '30%',
  flexShrink: 0,
  '::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    backgroundColor: color.white,
    borderTopLeftRadius: 40,
    backgroundImage: 'url(/assets/gradient.png)',
    backgroundSize: 'cover',
    width: `max(calc(100% + (100vw - ${width.content.mobile}px) / 2), calc(100% + ${width.siderail.mobile}px))`,
    height: '100%',
  },
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      paddingTop: 40,
      '::before': {
        borderTopLeftRadius: 40,
        width: `calc(100% + ${width.siderail.tablet}px)`,
        height: 'calc(100% - 40px)',
      },
    },
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      paddingTop: 60,
      '::before': {
        borderTopLeftRadius: 50,
        width: `max(calc(100% + (100vw - ${width.content.pc}px) / 2), calc(100% + ${width.siderail.pc}px))`,
        height: 'calc(100% - 60px)',
      },
    },
  },
})

export const technologiesBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  position: 'relative',
  padding: '40px 24px 60px',
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      padding: '40px 0 50px 40px',
    },
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      padding: '80px 0 90px 50px',
    },
  },
})

export const technologiesLabel = style({
  fontSize: 14,
  fontWeight: 'bold',
})

export const technologies = style({
  display: 'flex',
  flexWrap: 'wrap',
  fontSize: 20,
  fontWeight: 'bold',
  gap: '0 14px',
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      flexWrap: 'unset',
      flexDirection: 'column',
    },
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      fontSize: 24,
    },
  },
})
