import { css } from 'emotion'
import React from 'react'

type MenuContainerProps = {
  className?: string
}

const styles = {
  container: css({
    borderRadius: 5,
    boxShadow: '0 0 0 6px #c8e0e0, 0 0 0 7px #808080, 0 0 0 8px #283030, inset 0 0 0 1px #303088',
    display: 'flex',
    flexGrow: 1,
    margin: 8,
    padding: '2% 4%',
  }),
}

const MenuContainer: React.FC<MenuContainerProps> = ({ children, className }) => (
  <div className={css(styles.container, className)}>{children}</div>
)

export default MenuContainer
