import styles from './Slider.module.css'


export default function Slide({ url, link, page, i }) {
  const style = { backgroundImage: `url(${url})` }

  return (
    <div className={styles.slide} style={style}>
      <p>{page}</p>
      <p>{ i}</p>
      <a href={link}></a>
    </div>
  )
}
