import styles from './Slider.module.css'
import { useState, useEffect, useMemo, useCallback } from 'react'

export default function Button({ n }) {
  const [sidebar, setSidebar] = useState()
  const [slider, setSlider] = useState()
  const [height, setHeight] = useState()
  const [i, setI] = useState(1)
  let activeSlideIndex = 0
  document.querySelector(`.${styles.sidebar}`).style.top = `-${(n - 1) * 100}vh`

  useEffect(() => {
    setHeight(document.querySelector(`.${styles.container}`).clientHeight)
    setSidebar(document.querySelector(`.${styles.sidebar}`))
    setSlider(document.querySelector(`.${styles.slider}`))
  }, [height])

  const changeSlide = useCallback(direction => {
    if (direction === 'up') {
      activeSlideIndex++
      if (activeSlideIndex === n) {
        activeSlideIndex = 0
      }
    } else if (direction === 'down') {
      activeSlideIndex--
      if (activeSlideIndex < 0) {
        activeSlideIndex = n - 1
      }
    }
    console.log('activeSlideIndex', activeSlideIndex)
    setI(activeSlideIndex + 1)

    return activeSlideIndex
  }, [])

  const handleClick = d => {
    const ch = changeSlide(d) * height
    console.log('ch=', ch, 'i=', i)
    sidebar.style.transform = `translateY(${ch}px)`
    slider.style.transform = `translateY(-${ch}px)`
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') {
      handleClick('up')
    } else if (e.key === 'ArrowDown') {
      handleClick('down')
    }
  })

  return (
    <div className={styles.controls}>
      <button className={styles.downButton} onClick={() => handleClick('down')}>
        <i className="fas fa-arrow-down"></i>
        {i}
      </button>
      <button className={styles.upButton} onClick={() => handleClick('up')}>
        <i className="fas fa-arrow-up"></i>
        {i}
      </button>
    </div>
  )
}
