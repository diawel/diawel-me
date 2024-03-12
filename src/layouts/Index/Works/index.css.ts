import { breakpoint, color, width } from '@/utils/constants'
import { style, styleVariants } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: color.gray,
  padding: `0 ${width.siderail.mobile}px`,
  borderRadius: 40,
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      padding: `0 ${width.siderail.tablet}px`,
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      padding: `0 ${width.siderail.pc}px`,
      borderRadius: 50,
    },
  },
})

export const content = style({
  width: '100%',
  maxWidth: width.content.mobile,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: '60px 0',
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      maxWidth: width.content.pc,
      gap: 24,
      padding: '72px 0',
    },
  },
})

export const subject = style({
  fontSize: 28,
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      fontSize: 36,
    },
  },
})

export const queryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const query = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export const queryLabel = style({
  fontSize: 14,
})

const queryButtonListBase = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 12,
})

export const queryButtonList = styleVariants({
  container: [
    {
      display: 'flex',
      alignItems: 'flex-start',
    },
  ],
  fixed: [
    queryButtonListBase,
    {
      borderRight: `1px solid ${color.text}`,
      paddingRight: 12,
    },
  ],
  wrapped: [
    queryButtonListBase,
    {
      flexWrap: 'wrap',
    },
  ],
  scrollable: [
    queryButtonListBase,
    {
      overflowX: 'auto',
      width: `max(calc(100% + (100vw - ${width.content.mobile}px) / 2), calc(100% + ${width.siderail.mobile}px))`,
      paddingLeft: 12,
      paddingRight: `max(calc((100vw - ${width.content.mobile}px) / 2), ${width.siderail.mobile}px)`,
      '@media': {
        [`(min-width: ${breakpoint.tablet}px)`]: {
          width: `calc(100% + ${width.siderail.tablet}px)`,
          paddingRight: `${width.siderail.tablet}px`,
        },
        [`(min-width: ${breakpoint.pc}px)`]: {
          width: `max(calc(100% + (100vw - ${width.content.pc}px) / 2), calc(100% + ${width.siderail.pc}px))`,
          paddingRight: `max(calc((100vw - ${width.content.pc}px) / 2), ${width.siderail.pc}px)`,
        },
      },
    },
  ],
  scrollableContainer: [
    {
      minWidth: 0,
    },
  ],
})

export const workCardList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  padding: '30px 0',
  gap: 48,
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '48px 30px',
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '60px 30px',
    },
  },
})
