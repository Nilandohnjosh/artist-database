import request from 'superagent'

export function getKanye() {
  return request
    .get('api/v1/kanye')
    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch((err) => {
      console.log(err.message)
    })
}
