import { breakpoint, color, width } from '@/utils/constants'
import { globalStyle, style } from '@vanilla-extract/css'

export const abstractContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
})

export const abstract = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
})

export const titleBlock = style({
  display: 'flex',
  flexDirection: 'column',
})

export const period = style({
  fontSize: 16,
})

export const title = style({
  fontSize: 36,
  fontWeight: 'bold',
  lineHeight: 1.6,
})

export const descriptionBox = style({
  fontSize: 16,
})

export const description = style({
  fontSize: 16,
})

export const blockSubject = style({
  fontSize: 16,
})

export const tagList = style({
  display: 'flex',
  gap: 12,
  overflowX: 'auto',
  width: `max(calc(100% + (100vw - ${width.content.mobile}px)), calc(100% + ${width.siderail.mobile}px * 2))`,
  padding: `0 max(calc((100vw - ${width.content.mobile}px) / 2), ${width.siderail.mobile}px)`,
  marginLeft: `min(calc((${width.content.mobile}px - 100vw) / 2), -${width.siderail.mobile}px)`,
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      width: '100%',
      padding: 0,
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
})

export const pagingContainer = style({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  width: '100%',
  gap: 12,
  padding: `16px ${width.siderail.mobile}px`,
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundImage: `linear-gradient(0deg, rgba(255 255 255 / 0) 0%, rgba(255 255 255 / 1) 100%)`,
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      position: 'static',
      padding: 0,
    },
  },
})

export const pagingArrow = style({
  transform: 'rotate(-90deg)',
})

export const bodyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 28,
  padding: '40px 0',
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      padding: '60px 0',
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      gap: 36,
    },
  },
})

export const thumbnail = style({
  width: `max(calc(100% + (100vw - ${width.content.mobile}px)), calc(100% + ${width.siderail.mobile}px * 2))`,
  marginLeft: `min(calc((${width.content.mobile}px - 100vw) / 2), -${width.siderail.mobile}px)`,
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      width: `calc(100% + ${width.siderail.tablet}px * 2)`,
      marginLeft: `-${width.siderail.tablet}px`,
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      width: '100%',
      marginLeft: 0,
    },
  },
})

export const body = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const bodyText = style({
  margin: '12px 0',
})

globalStyle(`${bodyText} :is(p, ul, ol, blockquote)`, {
  margin: '12px 0',
})

globalStyle(`${bodyText} h2`, {
  margin: '32px 0 16px',
  fontSize: 24,
})

globalStyle(`${bodyText} blockquote`, {
  padding: '0 16px',
  borderLeft: `4px solid ${color.gray}`,
  color: color.text,
})

globalStyle(`${bodyText} ul > li`, {
  marginLeft: '1.25em',
  paddingLeft: '0.25em',
})

globalStyle(`${bodyText} ol > li`, {
  marginLeft: '1.5em',
})

globalStyle(`${bodyText} > :first-child`, {
  marginTop: 0,
})

globalStyle(`${bodyText} > :last-child`, {
  marginBottom: 0,
})
