import { breakpoint, color, width } from '@/utils/constants'
import { style, styleVariants } from '@vanilla-extract/css'

export const abstract = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      gap: 40,
    },
  },
})

export const subject = style({
  fontSize: 28,
  fontWeight: 'bold',
  lineHeight: 1.6,
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      fontSize: 36,
    },
  },
})

export const description = style({
  fontSize: 16,
})

const buttonBase = style({
  display: 'flex',
  position: 'fixed',
  bottom: 24,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      bottom: 40,
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      opacity: 1,
      pointerEvents: 'auto',
      position: 'static',
      transform: 'none',
    },
  },
})

export const button = styleVariants({
  visible: [
    buttonBase,
    {
      opacity: 1,
      pointerEvents: 'auto',
    },
  ],
  hidden: [
    buttonBase,
    {
      opacity: 0,
      pointerEvents: 'none',
    },
  ],
})

const symbolRadius = {
  mobile: 30,
  pc: 34,
}

export const timeline = style({
  width: '100%',
  padding: '60px 0 92px',
  paddingLeft: symbolRadius.mobile,
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      paddingBottom: 120,
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      padding: '60px 0',
      paddingLeft: symbolRadius.pc,
    },
  },
})

export const ageContainerList = style({
  display: 'flex',
  flexDirection: 'column',
  borderLeft: `1px solid ${color.text}`,
  gap: 30,
})

export const ageContainer = style({
  position: 'relative',
  padding: '8px 0',
  paddingLeft: symbolRadius.mobile + 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      padding: '12px 0',
      paddingLeft: symbolRadius.pc + 20,
      gap: 40,
    },
  },
})

export const ageSymbol = style({
  position: 'absolute',
  top: 0,
  left: -symbolRadius.mobile,
  width: symbolRadius.mobile * 2,
  height: symbolRadius.mobile * 2,
  borderRadius: '50%',
  backgroundColor: color.white,
  border: `1px solid ${color.text}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      left: -symbolRadius.pc,
      width: symbolRadius.pc * 2,
      height: symbolRadius.pc * 2,
    },
  },
})

export const age = style({
  fontSize: 20,
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      fontSize: 24,
    },
  },
})

export const unit = style({
  fontSize: 14,
})

export const lifeEvent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export const label = style({
  fontSize: 14,
})

export const lifeEventSubject = style({
  fontSize: 16,
  fontWeight: 'bold',
  '@media': {
    [`(min-width: ${breakpoint.pc}px)`]: {
      fontSize: 18,
    },
  },
})

export const lifeEventText = style({
  fontSize: 14,
})

export const imagesContainer = style({
  overflowX: 'auto',
  width: `max(calc(100% + (100vw - ${width.content.mobile}px) / 2), calc(100% + ${width.siderail.mobile}px))`,
  '@media': {
    [`(min-width: ${breakpoint.tablet}px)`]: {
      width: `calc(100% + ${width.siderail.tablet}px)`,
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
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
    [`(min-width: ${breakpoint.tablet}px)`]: {
      paddingRight: `${width.siderail.tablet}px`,
    },
    [`(min-width: ${breakpoint.pc}px)`]: {
      paddingRight: `max(calc((100vw - ${width.content.pc}px) / 2), ${width.siderail.pc}px)`,
    },
  },
})

export const image = style({
  height: '100%',
})

export const futureBorder = style({
  backgroundImage: `linear-gradient(to bottom, ${color.text}, ${color.text} 6px, transparent 6px)`,
  backgroundSize: '1px 12px',
  width: 1,
  height: 40,
  backgroundRepeat: 'repeat-y',
})
