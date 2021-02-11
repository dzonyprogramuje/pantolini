export default function isLogged(state = false, action) {
  switch (action.type) {
    case 'SIGNIN':
        return !state
    default:
      return state
  }
}