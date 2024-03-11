import { breakpoint, width } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const container = style({
  overflowX: 'auto',
  width: `max(calc(100% + (100vw - ${width.content.mobile}px) / 2), calc(100% + ${width.siderail.mobile}px))`,
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      width: `calc(100% + ${width.siderail.tablet}px)`,
    },
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      width: `max(calc(100% + (100vw - ${width.content.pc}px) / 2), calc(100% + ${width.siderail.pc}px))`,
    },
  },
})

export const images = style({
  minHeight: 100,
  display: 'flex',
  paddingRight: `max(calc((100vw - ${width.content.mobile}px) / 2), ${width.siderail.mobile}px)`,
  boxSizing: 'content-box',
  '@media': {
    [`screen and (min-width: ${breakpoint.tablet}px)`]: {
      paddingRight: `${width.siderail.tablet}px`,
    },
    [`screen and (min-width: ${breakpoint.pc}px)`]: {
      paddingRight: `max(calc((100vw - ${width.content.pc}px) / 2), ${width.siderail.pc}px)`,
    },
  },
})

export const image = style({
  height: '100%',
})
