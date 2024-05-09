import React from 'react'
import styles from "./header.module.css"
import { Menu } from '@/menu';
const Header = () => {
  return (
    <div className={styles.header}>
      <h1>welcome to shopper-x</h1>
      <Menu/>
    </div>
  )
}

export default Header;
