import { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk'

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
  dateRange: [YearMonth, YearMonth?]
  description: string
  technology: string
  tags: string[]
  body: (BodyText | BodyImages)[]
}

export const formatImage = (
  url: string,
  options?: { size?: number; format?: 'webp' | 'jpg' | 'png' }
) => {
  const urlObject = new URL(url)
  urlObject.searchParams.set('fm', options?.format ?? 'webp')
  if (options?.size) {
    urlObject.searchParams.set('w', options.size.toString())
    urlObject.searchParams.set('h', options.size.toString())
    urlObject.searchParams.set('fit', 'clip')
  }

  return urlObject.toString()
}

export const yearMonthToDate = (yearMonth: YearMonth) => {
  return new Date(yearMonth.year, yearMonth.month - 1)
}
