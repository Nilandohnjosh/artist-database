import { getKanye } from '../apis/kanye'

export const GET_YE = 'GET_YE'

export function receiveKanye(kanye) {
  return {
    type: GET_YE,
    kanye,
  }
}

// Thunk

export function getAllKanye() {
  return (dispatch) => {
    // do some async stuff
    // then dispatch

    // dispatch(setLoading())

    getKanye()
      // eslint-disable-next-line promise/always-return
      .then((ye) => {
        console.log(ye, 'thunk')
        dispatch(receiveKanye(ye))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
