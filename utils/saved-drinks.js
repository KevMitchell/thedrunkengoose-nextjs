export function toggleSaved (name, saved) {
  if (saved) {
    localStorage.setItem(name, 'saved')
  } else {
    localStorage.removeItem(name)
  }
}

export function getSaved (name) {
  return localStorage.getItem(name) === 'saved'
}
