import { css } from 'emotion'
import React from 'react'
import Pointer from './Pointer'
import { textStyles } from '../styles'

type MenuItemProps = {
  className?: string
  selected?: boolean
}

const styles = {
  container: (selected: boolean) =>
    css({
      '& :hover':
        !selected &&
        css(textStyles.blueText, {
          transition: 'color .5s ease',
        }),
      cursor: !selected ? 'pointer' : 'default',
      display: 'flex',
      transition: 'color .5s ease',
    }),
  hidden: css({
    opacity: 0,
  }),
}

const MenuItem: React.FC<MenuItemProps> = ({ children, className, selected = false }) => (
  <div className={css(styles.container(selected), className)}>
    <Pointer className={!selected ? styles.hidden : ''} />
    <div>{children}</div>
  </div>
)

export default MenuItem
