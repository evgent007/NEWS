import styles from './Slider.module.css'

export default function Slide({ url, link, page }) {
  const style = { backgroundImage: `url(${url})` }
  return (
    <div className={styles.slide} style={style}>
      <p>{page}</p>
      <a href={link}></a>
    </div>
  )
}
