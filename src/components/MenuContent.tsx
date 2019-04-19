import { css } from 'emotion'
import React from 'react'

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
  }),
}

const MenuContent: React.FC = ({ children }) => <div className={styles.container}>{children}</div>

export default MenuContent
