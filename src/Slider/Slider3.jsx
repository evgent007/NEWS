import { useEffect, useState, useRef } from 'react'
import Slide from './Slide'
import Sidebar from './Sidebar'
import Button from './Button'
import Button2 from './Button2'
import styles from './Slider.module.css'
import img from './word-news.jpg'
import { getNews } from '../Api'

export default function Slider3() {
  const [data, setData] = useState(null)
  const [page, setPage] = useState(0)

  const [style, setStyle] = useState({
    transform: `translateX(+700px)`,
    opacity: 0,
    transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
  })

  // if (data) {
  //   console.log('1data=', data, 'slider=', slider, 'height=', height, 'sidebar=', sidebar)
  // }
  // useEffect(() => {
  //   const resizeHandler = () => {
  //     console.log('ref=', ref.current.offsetHeight)
  //     const h = ref.current.offsetHeight

  //     setHeight(h)
  //     window.addEventListener('resize', resizeHandler)
  //   }
  //   resizeHandler()
  //   return () => {
  //     window.removeEventListener('resize', resizeHandler)
  //   }
  // }, [])

  useEffect(() => {
    console.log('render page')
    getNews(page)
      .then(dat => setData(dat))
      .catch(error => console.log('error==>', error.message))
  }, [page])

  useEffect(() => {
    console.log('render')
    setStyle({
      transform: 'none',
      opacity: 1,
      transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
    })
  }, [page])

  return (
    <div className={styles.container} style={style}>
      <div className={styles.sidebar}>
        {data &&
          data.results.map((d, i) => (
            <Sidebar key={i} i={data.results.length - i} title={d.title} text={d.pubDate} url={d.image_url ? d.image_url : img} />
          ))}
      </div>
      <div className={styles.slider}>
        {data &&
          [...data.results]
            .reverse()
            .map((d, i) => <Slide key={i} i={i + 1} url={d.image_url ? d.image_url : img} link={d.link} page={data.nextPage} />)}
      </div>
      {data && <Button n={data.results.length} />}
      {data && <Button2 setPage={setPage} page={data.nextPage} setStyle={setStyle} />}
    </div>
  )
}
//   console.log('')
//1
