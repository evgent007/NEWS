import React, { useState, useEffect, Children, cloneElement, useRef } from 'react'
import styles from './Carousel.module.css'

const Carousel = ({ children }) => {
  const [pages, setPages] = useState([])
  const [ofset, setOfset] = useState(0)
  const [width, setWidth] = useState(0)

  const pagesRef = useRef()

  useEffect(() => {
    console.log('render1')

    setPages(
      Children.map(children, child =>
        cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `100%`,
            maxWidth: `100%`,
          },
        })
      )
    )

    const resizeHandler = () => {
      const _w = pagesRef.current.offsetWidth
      console.log('ref=', _w)
      setWidth(_w)
      setOfset(0)
    }
    resizeHandler()

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  // const handleClick = direction => {
  //   if (direction === 'left') {
  //     setOfset(prev => {
  //       return prev + width
  //     })
  //   }
  //   if (direction === 'right') {
  //     setOfset(prev => prev - width)
  //   }
  // }

  const handleClick2 = e => {
    console.log(width / 2)
    console.log(e.pageX)
    if (e.pageX > width / 2) {
      console.log('>>>>>')
      setOfset(prev => (console.log(prev - width), Math.min(prev + width, 0)))
    }
    if (e.pageX < width / 2) {
      console.log('<<<<<<')
      setOfset(prev => (console.log(prev - width, -(width * (pages.length - 1))), Math.max(prev - width, -(width * (pages.length - 1)))))
    }
  }

  return (
    <div className={styles.container} ref={pagesRef}>
      <div
        className={styles.pages}
        onClick={handleClick2}
        style={{
          transform: `translateX(${ofset}px)`,
        }}
      >
        {pages}
      </div>
    </div>
  )
}

export default Carousel
