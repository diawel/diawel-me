import { breakpoint, color, width } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '0 24px',
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
  flexDirection: 'column',
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      maxWidth: width.content,
    },
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      flexDirection: 'row',
      gap: 60,
    },
  },
})

export const abstract = style({
  paddingTop: 60,
  width: '100%',
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      width: width.mobileContent,
    },
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      padding: '60px 0',
      width: 'calc(10% + 240px)',
      height: '100svh',
      position: 'sticky',
      top: 0,
    },
  },
})

export const children = style({
  width: '100%',
  '@media': {
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      width: 'calc(90% - 300px)',
    },
  },
})
