export default function isOpen(state = false, action) {
  switch (action.type) {
    case 'TOGGLESIDEBAR':
        return !state
    default:
      return state
  }
}