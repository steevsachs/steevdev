import { Link } from 'react-router-dom'
import { NavItems } from '../types'
import { css } from 'emotion'
import { textStyles } from '../styles'
import Pointer from './Pointer'
import React from 'react'

type MenuItemProps = {
  className?: string
  navItem: NavItems
  selected?: boolean
}

const styles = {
  container: (selected: boolean) =>
    css({
      '& :hover, & > a:visited:hover': selected && css(textStyles.whiteText, { cursor: 'default' }),
      cursor: !selected ? 'pointer' : 'default',
      display: 'flex',
      transition: 'color .5s ease',
    }),
  hidden: css({
    opacity: 0,
  }),
}

const MenuItem: React.FC<MenuItemProps> = ({ children, className, navItem, selected = false }) => (
  <div className={css(styles.container(selected), className)}>
    <Pointer className={!selected ? styles.hidden : ''} />
    <Link to={`/${navItem}`}>{children}</Link>
  </div>
)

export default MenuItem
