import { FastAverageColor } from 'fast-average-color'
import { useState, useEffect } from 'react'

export default function Sidebar({ title, text, url }) {
  const fac = new FastAverageColor()
  const [style, setStyle] = useState({
    backgroundColor: null,
  })

  useEffect(() => {
    fac
      .getColorAsync(url, {
        mode: 'speed',
        algorithm: 'sqrt',
        // step:0,
      })
      .then(color => {
        setStyle({ backgroundColor: color.rgba })
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <div style={style}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
