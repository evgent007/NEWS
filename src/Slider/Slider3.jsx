import { useEffect, useState } from 'react'
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
  const [sidebar, setSidebar] = useState()
  const [slider, setSlider] = useState()
  const [height, setHeight] = useState()


  // if (data) {
  //   console.log('1data=', data, 'slider=', slider, 'height=', height, 'sidebar=', sidebar)
  // }

  useEffect(() => {

    getNews(page)
      .then(dat => setData(dat))
      .catch(error => console.log('error==>', error.message))
  }, [page])

  useEffect(() => {
    setHeight(document.querySelector(`.${styles.container}`).clientHeight)
    setSidebar(document.querySelector(`.${styles.sidebar}`))
    setSlider(document.querySelector(`.${styles.slider}`))
  }, [height])

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {data && data.results.map((d, i) => <Sidebar key={i} title={d.title} text={d.pubDate} url={d.image_url ? d.image_url : img} />)}
      </div>
      <div className={styles.slider}>
        {data &&
          [...data.results].reverse().map((d, i) => <Slide key={i} url={d.image_url ? d.image_url : img} link={d.link} page={data.nextPage} />)}
      </div>
      {data && sidebar && slider && height && (
        <Button n={data.results.length} sidebar={sidebar} slider={slider} height={height} />
      )}
      {data && <Button2 setPage={setPage} page={data.nextPage} />}
    </div>
  )
}
