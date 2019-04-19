import { CSSObject } from '@emotion/css'
import { css, injectGlobal } from 'emotion'

const globalStyles: CSSObject[] = [
  {
    body: {
      '& #root': {
        height: 'calc(100vh - 5px)',
      },
      backgroundColor: 'rgb(0, 50, 175)',
      color: '#F8F8F8',
      fontFamily: '"Press Start 2P", sans-serif',
      fontSize: 48,
      fontWeight: 900,
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
