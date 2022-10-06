import { FastAverageColor } from 'fast-average-color'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Sidebar({ title, text, url }) {
  const fac = new FastAverageColor()
  const [style, setStyle] = useState({
    backgroundColor: null,
  })

  useEffect(() => {
    fac
      .getColorAsync(url, {
        mode: 'precision',
        algorithm: 'sqrt',
        crossOrigin: 'anonymous', //'use-credentials''anonymous'
      })
      .then(color => {
        console.log(color)

        setStyle({ backgroundColor: color.hexa })
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

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
    </div>
  )
}
