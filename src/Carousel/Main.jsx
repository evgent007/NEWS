import React from 'react'
import Carousel from './Carousel'
import styles from './Carousel.module.css'

const Main = () => {
  return (
    <Carousel>
      <div className={styles.item + ' ' + styles.item1}>item 1</div>
      <div className={styles.item + ' ' + styles.item2}>item 2</div>
      <div className={styles.item + ' ' + styles.item3}>item 3</div>
    </Carousel>
  )
}

export default Main
