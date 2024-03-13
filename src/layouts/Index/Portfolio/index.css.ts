import { breakpoint, color, width } from '@/utils/constants'
import { style, styleVariants } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: color.white,
  padding: `0 ${width.siderail.mobile}px`,
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      padding: `0 ${width.siderail.tablet}px`,
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      padding: `0 ${width.siderail.pc}px`,
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
      padding: '120px 0',
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

export const descriptionBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
})

export const description = style({
  fontSize: 16,
})

export const sliderContainer = style({
  position: 'relative',
})

export const slider = style({
  width: '100%',
  display: 'flex',
  aspectRatio: '16 / 9',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  position: 'relative',
  '::-webkit-scrollbar': {
    display: 'none',
  },
})

export const image = style({
  flexShrink: 0,
  width: 'auto',
  height: '100%',
  objectFit: 'cover',
  scrollSnapAlign: 'center',
})

export const sliderOverlay = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '30%',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  gap: 20,
  padding: 20,
  backgroundImage: `linear-gradient(0deg, rgba(0,0,0, 0.3) 0%, rgba(0,0,0,0) 100%)`,
  display: 'none',
  '@media': {
    '(hover: hover)': {
      display: 'flex',
      opacity: 0,
      selectors: {
        [`${sliderContainer}:hover > &`]: {
          opacity: 1,
        },
      },
    },
  },
})

const buttonBase = style({
  height: 32,
  borderRadius: 16,
  padding: '0 8px',
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${color.text}`,
  boxShadow: `0 2px 0 ${color.shadow}`,
  marginBottom: 2,
  backgroundColor: color.white,
})

export const button = styleVariants({
  forward: [
    buttonBase,
    {
      width: 64,
      justifyContent: 'flex-end',
    },
  ],
  backward: [
    buttonBase,
    {
      width: 32,
      justifyContent: 'center',
    },
  ],
})

export const arrowBase = style({
  width: 12,
  height: 12,
})

export const arrow = styleVariants({
  forward: [
    arrowBase,
    {
      transform: 'rotate(90deg)',
    },
  ],
  backward: [
    arrowBase,
    {
      transform: 'rotate(-90deg)',
    },
  ],
})