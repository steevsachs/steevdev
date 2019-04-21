import { styles } from '../../../components/App'
import MenuContainer from '../../../components/MenuContainer'
import React from 'react'
import { textStyles } from '../../../styles'

const Bio: React.FC = () => (
  <MenuContainer className={styles.main}>
    <div>
      Full stack engineer. Seeks opportunities to contribute to the development of efficient,
      innovative software and processes. Gains <span className={textStyles.blueText}>synergy</span>{' '}
      when on an <span className={textStyles.blueText}>enthusiastic</span>,{' '}
      <span className={textStyles.blueText}>collaborative</span> team.
    </div>
  </MenuContainer>
)

export default Bio
