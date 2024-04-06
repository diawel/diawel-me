import { breakpoint, color, width } from '@/utils/constants'
import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
})

export const thumbnailContainer = style({
  width: '100%',
  height: 'auto',
  borderRadius: 8,
  aspectRatio: '16 / 9',
  border: `1px solid ${color.text}`,
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: color.white,
})

export const thumbnail = style({
  width: '100%',
  height: 'calc(100% + 4px)',
  objectFit: 'cover',
  transform: 'translateY(0)',
  transition: 'transform 0.3s cubic-bezier(0, .6, .4, 1)',
  '@media': {
    '(hover: hover)': {
      selectors: {
        [`${container}:hover &`]: {
          transform: 'translateY(-4px)',
        },
      },
    },
  },
})

export const thumbnailOverlay = style({
  boxShadow: `inset 0 4px 0 ${color.shadow}`,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: 7,
  transition: 'box-shadow 0.3s',
  '@media': {
    '(hover: hover)': {
      selectors: {
        [`${container}:hover &`]: {
          boxShadow: `inset 0 0 0 ${color.shadow}`,
        },
      },
    },
  },
})

export const thumbnailOverlayInner = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '30%',
  padding: 12,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  backgroundImage: `linear-gradient(0deg, rgba(0 0 0 / 0.3) 0%, rgba(0 0 0 / 0) 100%)`,
  opacity: 0,
  filter: 'blur(2px)',
  transition: 'opacity 0.3s, filter 0.3s',
  '@media': {
    '(hover: hover)': {
      selectors: {
        [`${container}:hover &`]: {
          opacity: 1,
          filter: 'blur(0)',
        },
      },
    },
  },
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
