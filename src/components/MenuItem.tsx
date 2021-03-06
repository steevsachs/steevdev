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

const handleHireOnClick = () => {
  window.location.assign(
    "mailto:steevsach.s@gmail.com?subject=Come work for me!&body=I'm prepared to make you an offer you can't refuse"
  )
}

const MenuItem: React.FC<MenuItemProps> = ({ children, className, navItem, selected = false }) => {
  const link =
    navItem === NavItems.Hire ? (
      <a onClick={handleHireOnClick}>{children}</a>
    ) : (
      <Link to={`/${navItem}`}>{children}</Link>
    )

  return (
    <div
      className={css(styles.container(selected), className)}
      data-testid={`pointer-${navItem}-${selected}`}
    >
      <Pointer className={!selected ? styles.hidden : ''} />
      {link}
    </div>
  )
}

export default MenuItem
