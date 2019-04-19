import { css } from 'emotion'
import { textStyles } from '../styles'
import MenuContainer from './MenuContainer'
import MenuContent from './MenuContent'
import Portrait from './Portrait'
import React from 'react'

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }),
  section: css({
    display: 'flex',
    flexDirection: 'row',
  }),
}

const App: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.section}>
      <MenuContainer>
        <Portrait />
        <MenuContent>
          <div>STEEV SACHS</div>
          <div>Software Engineer</div>
          <div>
            <span className={textStyles.blueText}>XP: </span> 6 yrs
          </div>
        </MenuContent>
      </MenuContainer>
    </div>
    <div className={styles.section}>
      <MenuContainer>
        <div>A wild app appeared!</div>
      </MenuContainer>
      <MenuContainer>
        <div>A wild app appeared!</div>
      </MenuContainer>
    </div>
  </div>
)
export default App
