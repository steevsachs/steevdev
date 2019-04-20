import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css } from 'emotion'
import { textStyles } from '../styles'
import MenuContainer from './MenuContainer'
import MenuContent from './MenuContent'
import MenuItem from './MenuItem'
import Portrait from './Portrait'
import React from 'react'

enum Sections {
  Bio = 'bio',
  Hire = 'hire',
  Skills = 'skills',
  Social = 'social',
}

const styles = {
  body: {
    height: '100%',
  },
  container: css({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }),
  main: css({
    flexGrow: 0.85,
  }),
  menu: css({
    flexDirection: 'column',
    flexGrow: 0.15,
    minWidth: '15%',
  }),
  section: css({
    display: 'flex',
    flexDirection: 'row',
  }),
}

const App: React.FC = () => (
  <Router>
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
      <div className={css(styles.section, styles.body)}>
        <MenuContainer className={styles.menu}>
          <MenuItem selected>Bio</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Links</MenuItem>
          <MenuItem>Hire</MenuItem>
        </MenuContainer>
        <MenuContainer className={styles.main}>
          <div>
            Full stack engineer seeking opportunities to contribute to the development of efficient,
            innovative, high-quality software and processes as part of a team of passionate
            professionals who love their jobs and their products
          </div>
        </MenuContainer>
      </div>
    </div>
  </Router>
)
export default App
