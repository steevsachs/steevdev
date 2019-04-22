import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { NavItems } from '../types'
import { css } from 'emotion'
import { textStyles } from '../styles'
import MenuContainer from './MenuContainer'
import MenuContent from './MenuContent'
import Portrait from './Portrait'
import React from 'react'
import Navigation from './Navigation'
import Bio from '../modules/bio/components/Bio'
import Links from '../modules/links/components/Links'
import Skills from '../modules/skills/components/Skills'

const styles = {
  body: {
    flexGrow: 1,
    height: '100%',
  },
  container: css({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh',
  }),
  header: css({
    alignItems: 'center',
    padding: 0,
  }),
  main: css({
    flexGrow: 1,
  }),
  menu: css({
    flexDirection: 'column',
    flexGrow: 0.15,
    maxWidth: '15%',
    minWidth: '15%',
  }),
  section: css({
    display: 'flex',
    flexDirection: 'row',
  }),
}

const App: React.FC = () => (
  <Router>
    <Route exact path="/" render={() => <Redirect to="/bio" />} />
    <div className={styles.container}>
      <div className={styles.section}>
        <MenuContainer className={styles.header}>
          <Portrait />
          <MenuContent className={css({ display: 'flex', flexGrow: 1 })}>
            <div>STEEV SACHS</div>
            <div>Software Engineer</div>
            <div>
              <span className={textStyles.blueText}>XP: </span> 6 yrs
            </div>
          </MenuContent>
        </MenuContainer>
      </div>
      <div className={css(styles.section, styles.body)}>
        <Route
          path={'/:navItem?'}
          component={({
            match: {
              params: { navItem = NavItems.Bio },
            },
          }: {
            match: { params: { navItem: NavItems } }
          }) => <Navigation selected={navItem} />}
        />
        <Route path={`/${NavItems.Bio}`} component={Bio} />
        <Route path={`/${NavItems.Social}`} component={Links} />
        <Route path={`/${NavItems.Skills}`} component={Skills} />
      </div>
    </div>
  </Router>
)

export { styles }
export default App
