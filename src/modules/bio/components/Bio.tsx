import { styles } from '../../../components/App'
import MenuContainer from '../../../components/MenuContainer'
import React from 'react'

const Bio: React.FC = () => (
  <MenuContainer className={styles.main}>
    <div>
      Full stack engineer seeking opportunities to contribute to the development of efficient,
      innovative, high-quality software and processes as part of a team of passionate professionals
      who love their jobs and their products
    </div>
  </MenuContainer>
)

export default Bio
