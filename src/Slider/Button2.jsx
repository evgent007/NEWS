import React from 'react'
import styles from './Slider.module.css'

const Button2 = ({ setPage, page, setStyle }) => {
  function handleClick(f) {
    if (f === 'left') {
      setStyle({
        transform: `translateX(-900px)`,
        opacity: 0,
        transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
      })
      setTimeout(() => setPage(prev => prev - 1), 900)
    }
    if (f === 'right') {
      setStyle({
        transform: `translateX(+900px)`,
        opacity: 0,
        transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
      })

      setTimeout(() => setPage(prev => prev + 1), 900)
    }
  }
  return (
    <div className={styles.controls}>
      <button className={styles.leftButton} onClick={() => handleClick('left')}>
        {page - 1 + ' '}
        <i className="fas fa-arrow-left"></i>
      </button>
      <button className={styles.rightButton} onClick={() => handleClick('right')}>
        <i className="fas fa-arrow-right"></i>
        {' ' + (page + 1)}
      </button>
    </div>
  )
}

export default Button2
