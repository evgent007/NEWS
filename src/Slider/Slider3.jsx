import { useEffect, useState } from 'react'
import Slide from './Slide'
import Sidebar from './Sidebar'
import Button from './Button'
import Button2 from './Button2'
import styles from './Slider.module.css'
import img from './word-news.jpg'
import { getNews } from '../Api'

export default function Slider3() {
  const [sidebar, setSidebar] = useState()
  const [mainSlide, setMainSlide] = useState()
  const [height, setHeight] = useState()

  const [data, setData] = useState(null)
  const [page, setPage] = useState(0)

  if (data) {
    console.log('1data=', data)
  }

  useEffect(() => {
    getNews(page)
      .then(dat => setData(dat))
      .catch(error => console.log('error==>', error.message))
  }, [page])

  useEffect(() => {
    setHeight(document.querySelector(`.${styles.container}`).clientHeight)
    setSidebar(document.querySelector(`.${styles.sidebar}`))
    setMainSlide(document.querySelector(`.${styles.mainSlide}`))
    console.log('render')
  }, [height])

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {data && data.results.map((d, i) => <Sidebar key={i} title={d.title} text={d.pubDate} url={d.image_url ? d.image_url : img} />)}
      </div>

      <div className={styles.mainSlide}>
        {data &&
          [...data.results].reverse().map((d, i) => <Slide key={i} url={d.image_url ? d.image_url : img} link={d.link} page={data.nextPage} />)}
      </div>
      {data && sidebar && mainSlide && height && (
        <Button n={data.results.length} sidebar={sidebar} mainSlide={mainSlide} height={height} setPage={setPage} />
      )}
      {data && <Button2 setPage={setPage} page={data.nextPage} />}
    </div>
  )
}
