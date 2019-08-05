export const state = ({ state }, payload) => {
  if (payload[1]) {
    state[payload[0]] = payload[1]
  } else {
    return state[payload[0]]
  }
}
