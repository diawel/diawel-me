import { MicroCMSDate, MicroCMSImage, createClient } from 'microcms-js-sdk'

if (!process.env.MICROCMS_SERVICE_DOMAIN)
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')

if (!process.env.MICROCMS_API_KEY)
  throw new Error('MICROCMS_API_KEY is required')

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

export type LifeEvent = {
  fieldId: 'lifeEvent'
  label: string
  subject: string
  text: string
  images: MicroCMSImage[]
}

export type AgeSymbol = {
  fieldId: 'ageSymbol'
  age: number
}

export type Timeline = (LifeEvent | AgeSymbol)[]

export type Top = MicroCMSDate & {
  love: string
  introductionSubject: string
  introductionText: string
  timeline: Timeline
  portfolioImages: MicroCMSImage[]
  portfolioDescription: string
}

export type YearMonth = {
  fieldId: 'yearMonth'
  year: number
  month: number
}

export type BodyText = {
  fieldId: 'bodyText'
  html: string
}

export type BodyImages = {
  fieldId: 'bodyImages'
  images: MicroCMSImage[]
}

export type Work = MicroCMSDate & {
  id: string
  thumbnail: MicroCMSImage
  title: string
  confidence: number
  dateRange: [YearMonth, YearMonth?]
  description: string
  technology: string
  tags: string[]
  body: (BodyText | BodyImages)[]
}
