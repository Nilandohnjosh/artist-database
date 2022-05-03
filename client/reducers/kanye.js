import { GET_YE } from '../actions/kanye'

function kanyeReducer(state = [], action) {
  switch (action.type) {
    case GET_YE:
      return action.kanye
    default:
      return state
  }
}

export default kanyeReducer
