import { css } from 'emotion'
import React from 'react'

type MenuContentProps = {
  className?: string
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
  }),
}

const MenuContent: React.FC<MenuContentProps> = ({ children, className }) => (
  <div className={css(styles.container, className)}>{children}</div>
)

export default MenuContent
