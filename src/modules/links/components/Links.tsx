import React from 'react'
import MenuContainer from '../../../components/MenuContainer'
import { styles } from '../../../components/App'

const Links: React.FC = () => (
  <MenuContainer className={styles.main}>
    <a href="https://github.com/steevsachs">Github</a>
  </MenuContainer>
)

export default Links
