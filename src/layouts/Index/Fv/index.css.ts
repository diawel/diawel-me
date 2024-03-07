import { breakpoint, color, width } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: color.gray,
  padding: '0 24px',
  overflow: 'hidden',
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      padding: '0 40px',
    },
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      padding: '0 60px',
    },
  },
})

export const content = style({
  width: '100%',
  maxWidth: width.mobileContent,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      maxWidth: width.content,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 60,
    },
  },
})

export const primary = style({
  padding: '72px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  '@media': {
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      padding: '60px 0',
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
  flexShrink: 0,
  '::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    backgroundColor: color.white,
    borderTopLeftRadius: 40,
    backgroundImage: 'url(/assets/gradient.png)',
    backgroundSize: 'cover',
    width: `max(calc(50vw + ${width.mobileContent}px / 2), calc(100% + 24px))`,
    height: '100%',
  },
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      paddingTop: 60,
      '::before': {
        borderTopLeftRadius: 50,
        width: `max(calc(100% + (100vw - ${width.content}px) / 2), calc(100% + 60px))`,
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
      padding: '72px 0 80px 40px',
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
