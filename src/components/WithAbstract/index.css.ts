import { breakpoint, color, width } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
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
  flexDirection: 'column',
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      maxWidth: width.content.pc,
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
      width: width.content.mobile,
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
