import { CSSObject } from '@emotion/css'
import { css, injectGlobal } from 'emotion'

type Font = {
  fontFamily: string
  fontWeight: number
  filename: string
}

const formats = ['ttf', 'woff']

const fonts: Font[] = [
  { fontFamily: '"Final Fantasy 3/6 Font"', fontWeight: 900, filename: 'final_fantasy_36_font' },
]

const fontFaceSrc = (filename: string) =>
  formats
    .map(
      (format: string): string =>
        `url('/fonts/${filename}.${format}') format('${format === 'ttf' ? 'truetype' : format}')`
    )
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

const globalStyles: CSSObject[] = [
  ...fonts.map(createFontFace),
  {
    body: {
      '& #root': {
        height: 'calc(100vh - 5px)',
      },
      backgroundColor: 'rgb(0, 50, 175)',
      color: '#F8F8F8',
      fontFamily: '"Final Fantasy 3/6 Font", sans-serif',
      fontSize: '4em',
      fontWeight: 900,
      letterSpacing: 2,
      margin: 2,
      padding: 0,
      textShadow: '2px 0 0 #000, 0 2px 0 #000',
    },
  },
]

const textStyles = {
  blueText: css({
    color: 'rgb(0, 200, 255)',
  }),
}

injectGlobal(globalStyles)

export { textStyles }
