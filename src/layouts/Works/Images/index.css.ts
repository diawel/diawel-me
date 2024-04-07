import { breakpoint, width } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const container = style({
  overflowX: 'auto',
  width: `max(calc(100% + (100vw - ${width.content.mobile}px)), calc(100% + ${width.siderail.mobile}px * 2))`,
  marginLeft: `min(calc((${width.content.mobile}px - 100vw) / 2), -${width.siderail.mobile}px)`,
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      width: `calc(100% + ${width.siderail.tablet}px * 2)`,
      marginLeft: `-${width.siderail.tablet}px`,
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      width: `max(calc(100% + (100vw - ${width.content.pc}px) / 2), calc(100% + ${width.siderail.pc}px))`,
      marginLeft: 0,
    },
  },
})

export const images = style({
  minHeight: 150,
  display: 'flex',
  padding: `0 max(calc((100vw - ${width.content.mobile}px) / 2), ${width.siderail.mobile}px)`,
  boxSizing: 'content-box',
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      padding: `0 ${width.siderail.tablet}px`,
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      padding: 0,
      paddingRight: `max(calc((100vw - ${width.content.pc}px) / 2), ${width.siderail.pc}px)`,
    },
  },
})

export const image = style({
  height: '100%',
})
