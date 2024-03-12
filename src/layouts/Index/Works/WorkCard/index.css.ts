import { breakpoint, color, width } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
})

export const thumbnail = style({
  width: '100%',
  height: 'auto',
  borderRadius: 8,
  objectFit: 'cover',
  aspectRatio: '16 / 9',
  border: `1px solid ${color.text}`,
  boxShadow: `inset 0 4px 0 ${color.shadow}`,
})

export const descriptionBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
})

export const title = style({
  fontSize: 18,
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
