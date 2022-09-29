
const API_news = 'https://newsdata.io/api/1/news?'

const params = {
  apikey: 'pub_11651d9ad6d9e0aa1cea557493e77d1a8d850',
  language: 'ru',
}
const esc = encodeURIComponent
let query = Object.keys(params)
  .map(k => esc(k) + '=' + esc(params[k]))
  .join('&')

const option = {
  // referrer: '',
  referrerPolicy: 'no-referrer-when-downgrade',
  // mode: ' same-origin',
  // credentials: 'omit',
}


export async function getNews(page) {
  const res = await fetch(API_news + query + `&page=${page}`, )

  return await res.json()
}