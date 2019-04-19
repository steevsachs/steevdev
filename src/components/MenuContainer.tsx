import { css } from 'emotion'
import React from 'react'

type MenuContainerProps = {}

const styles = {
  container: css({
    backgroundImage: 'linear-gradient(to top right, rgb(0, 50, 175), rgb(0, 200, 255))',
    borderRadius: 5,
    boxShadow: '0 0 0 6px #c8e0e0, 0 0 0 7px #808080, 0 0 0 8px #283030, inset 0 0 0 1px #303088',
    display: 'flex',
    flexGrow: 1,
    margin: 8,
    padding: 16,
  }),
}

const MenuContainer: React.FC<MenuContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default MenuContainer
