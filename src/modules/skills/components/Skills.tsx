import React from 'react'
import MenuContainer from '../../../components/MenuContainer'
import { styles as appStyles } from '../../../components/App'
import { css } from 'emotion'

const styles = {
  columns: css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  }),
  item: css({
    width: '50%',
  }),
}

const Skills: React.FC = () => (
  <MenuContainer className={css(appStyles.main, { flexDirection: 'column' })}>
    <div className={styles.columns}>
      <div className={styles.item}>Javascript</div>
      <div className={styles.item}>Typescript</div>
      <div className={styles.item}>React</div>
      <div className={styles.item}>Redux</div>
      <div className={styles.item}>Jest</div>
      <div className={styles.item}>Angular</div>
      <div className={styles.item}>Babel</div>
      <div className={styles.item}>Webpack</div>
      <div className={styles.item}>Typeorm</div>
      <div className={styles.item}>NodeJS</div>
      <div className={styles.item}>Express</div>
      <div className={styles.item}>Koa</div>
      <div className={styles.item}>MySQL</div>
      <div className={styles.item}>Postgres</div>
      <div className={styles.item}>MongoDB</div>
      <div className={styles.item}>Docker</div>
      <div className={styles.item}>Terraform</div>
      <div className={styles.item}>ECS</div>
      <div className={styles.item}>RDS</div>
      <div className={styles.item}>Lambda</div>
      <div className={styles.item}>API Gateway</div>
    </div>
  </MenuContainer>
)

export default Skills
