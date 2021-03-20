/* eslint-disable no-proto */
import { toggleSaved, getSaved } from '../../utils/saved-drinks'

jest.spyOn(window.localStorage.__proto__, 'setItem')
window.localStorage.__proto__.setItem = jest.fn()

jest.spyOn(window.localStorage.__proto__, 'getItem')
window.localStorage.__proto__.getItem = jest.fn()

jest.spyOn(window.localStorage.__proto__, 'removeItem')
window.localStorage.__proto__.removeItem = jest.fn()

describe('savedDrinks', () => {
  test('saves saved states to local storage', () => {
    toggleSaved('test', true)
    expect(localStorage.setItem).toHaveBeenCalledWith('test', 'saved')
  })

  test('removes non saved states from local storage', () => {
    toggleSaved('test', false)
    expect(localStorage.removeItem).toHaveBeenCalledWith('test')
  })

  test('gets saved states from local storage', () => {
    window.localStorage.__proto__.getItem = jest.fn(() => 'saved')
    const saved = getSaved('test')
    expect(localStorage.getItem).toHaveBeenCalledWith('test')
    expect(saved).toEqual(true)
  })

  test('returns false for non saved items', () => {
    window.localStorage.__proto__.getItem = jest.fn(() => undefined)
    const saved = getSaved('test')
    expect(localStorage.getItem).toHaveBeenCalledWith('test')
    expect(saved).toEqual(false)
  })
})
