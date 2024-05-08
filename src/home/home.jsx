import React from 'react'
import styles from "./home.module.css";
import { Menu } from '@/menu';
const Home = () => {
  return (
    <div className={styles.home}>
      <Menu/>
      Home sweet home
    </div>
  )
}

export default Home
