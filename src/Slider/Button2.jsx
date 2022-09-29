import React from 'react'
import styles from './Slider.module.css'

const Button2 = ({ setPage,page }) => {
  function handleClick(f) {
    if (f === 'left') {
      setPage(prev => prev - 1)
      console.log('left')
    }
    if (f === 'right') {
      setPage(prev => prev + 1)
      console.log('right')
    }
  }
  return (
    <div className={styles.controls}>
      <button className={styles.leftButton} onClick={() => handleClick('left')}>
        {(page - 1)+' '}
        <i className="fas fa-arrow-left"></i>
      </button>
      <button className={styles.rightButton} onClick={() => handleClick('right')}>
        <i className="fas fa-arrow-right"></i>
        {' '+(page + 1)}
      </button>
    </div>
  )
}

export default Button2
