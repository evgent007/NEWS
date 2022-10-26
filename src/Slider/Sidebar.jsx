import { FastAverageColor } from 'fast-average-color'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Sidebar({ title, text, url, i }) {
  const fac = new FastAverageColor()
  const [style, setStyle] = useState({
    backgroundColor: null,
  })

  useEffect(() => {
    fac
      .getColorAsync(url, {
        ignoredColor: [
          [255, 255, 255, 255], // white
          [0, 0, 0, 255], // black
        ],
        mode: 'precision', //  'precision' | 'speed'
        algorithm: 'simple', //'simple' | 'sqrt' | 'dominant'
        crossOrigin: 'anonymous', //'use-credentials'|'anonymous'
      })
      .then(color => {
        console.log('color', color)

        setStyle({ backgroundColor: color.hexa, color: color.isDark ? '#fff' : '#000' })
      })
      .catch(e => {
        console.log(e)
      })
  }, [url])

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const animeStyle = {
    transform: isInView ? 'none' : 'translateX(200px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
  }

  return (
    <div style={style}>
      <h1 style={animeStyle} ref={ref}>
        {title}
      </h1>
      <p>{text}</p>
      <p>{i}</p>
    </div>
  )
}
