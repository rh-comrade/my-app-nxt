import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import menuItems from './config.json'
const Menu = () => {
  return (
    <nav className={styles.nav}>
      {
        menuItems?.map(({item,route},index)=>{
          return <Link className={styles.link} key={`menu_${index}`}  href={route}>{item}</Link>
        })
      }
    </nav>
  )
}

export default Menu
