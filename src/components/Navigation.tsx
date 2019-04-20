import { NavItems } from '../types'
import { styles as appStyles } from './App'
import React from 'react'
import MenuItem from './MenuItem'
import MenuContainer from './MenuContainer'

type NavigationProps = {
  selected: NavItems
}

const Navigation: React.FC<NavigationProps> = ({ selected }) => (
  <MenuContainer className={appStyles.menu}>
    <MenuItem navItem={NavItems.Bio} selected={selected === NavItems.Bio}>
      Bio
    </MenuItem>
    <MenuItem navItem={NavItems.Skills} selected={selected === NavItems.Skills}>
      Skills
    </MenuItem>
    <MenuItem navItem={NavItems.Social} selected={selected === NavItems.Social}>
      Links
    </MenuItem>
    <MenuItem navItem={NavItems.Hire} selected={selected === NavItems.Hire}>
      Hire
    </MenuItem>
  </MenuContainer>
)

export default Navigation
