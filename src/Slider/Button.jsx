import styles from './Slider.module.css'

export default function Button({ n, sidebar, slider, height}) {
  let activeSlideIndex = 0
  document.querySelector(`.${styles.sidebar}`).style.top = `-${(n - 1) * 100}vh`

  function changeSlide(direction) {

    if (direction === 'up') {
      activeSlideIndex++
      if (activeSlideIndex === n) {
        activeSlideIndex = 0
      }
    } else if (direction === 'down') {
      activeSlideIndex--
      if (activeSlideIndex < 0) {
        activeSlideIndex = n-1
        console.log('setPage',activeSlideIndex)
      }
    }
    return activeSlideIndex * height
  }

  const handleClick = function (d) {
    const ch = changeSlide(d)
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
      </button>
      <button className={styles.upButton} onClick={() => handleClick('up')}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  )
}
