import { css } from 'emotion'
import { styles as appStyles } from '../../../components/App'
import MenuContainer from '../../../components/MenuContainer'
import React from 'react'

const styles = {
  list: css({
    display: 'flex',
    flexDirection: 'column',
  }),
}

const Links: React.FC = () => (
  <MenuContainer className={css(appStyles.main, styles.list)}>
    <a href="https://github.com/steevsachs" target="_blank">
      Github
    </a>
    <a href="https://github.com/steevsachs/steevdev" target="_blank">
      Code for this site
    </a>
    <a href="https://www.linkedin.com/in/stephen-sachs-a95819b/" target="_blank">
      LinkedIn
    </a>
  </MenuContainer>
)

export default Links
