import { CSSObject } from '@emotion/css'
import { injectGlobal } from 'emotion'

type Font = {
  fontFamily: string
  fontWeight: number
  filename: string
}

const formats = ['woff2', 'woff']

const fonts: Font[] = [
  { fontFamily: 'Open Sans', fontWeight: 400, filename: 'open-sans-latin-400' },
  { fontFamily: 'Open Sans', fontWeight: 600, filename: 'open-sans-latin-600' },
  { fontFamily: 'Open Sans', fontWeight: 700, filename: 'open-sans-latin-700' },
  { fontFamily: 'Montserrat', fontWeight: 600, filename: 'montserrat-latin-600' },
  { fontFamily: 'Montserrat', fontWeight: 700, filename: 'montserrat-latin-700' },
]

const fontFaceSrc = (filename: string) =>
  formats
    .map((format: string): string => `url('/fonts/${filename}.${format}') format('${format}')`)
    .join(',')

const createFontFace = ({ fontFamily, fontWeight, filename }: Font): CSSObject => ({
  '@font-face': {
    fontFamily,
    fontStyle: 'normal',
    fontWeight,
    src: fontFaceSrc(filename),
    textRendering: 'optimizeLegibility',
  },
})

const globalStyles: CSSObject[] = [...fonts.map(createFontFace)]

injectGlobal(globalStyles)
