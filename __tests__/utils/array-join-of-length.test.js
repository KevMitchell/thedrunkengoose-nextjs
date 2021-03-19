import { render } from '@testing-library/react'
import { joinString, joinJsx } from '../../utils/array-join-of-length'

describe('joinString', () => {
  test('returns an empty string for an empty array', () => {
    expect(joinString([])).toEqual('')
  })

  describe('small array', () => {
    const smallArray = ['a', 'b']
    test('returns a joined string if array items fit onto one line', () => {
      expect(joinString(smallArray, 10)).toEqual('ab')
    })

    test('uses delimeters if provided', () => {
      expect(joinString(smallArray, 10, '-')).toEqual('a-b')
    })
  })

  describe('large array', () => {
    const largeArray = ['aaa', 'bbbb']
    test('returns a joined string where array items do not fit onto one line', () => {
      expect(joinString(largeArray, 3)).toEqual('aaa\nbbbb')
    })

    test('uses delimeters if provided', () => {
      expect(joinString(largeArray, 10, '-')).toEqual('aaa-bbbb')
    })

    test('doesnt use delimeters with newlines', () => {
      expect(joinString(largeArray, 3, '-')).toEqual('aaa\nbbbb')
    })
  })
})

describe('joinJsx', () => {
  test('returns an empty element for an empty array', () => {
    const { container } = render(joinJsx([]))
    expect(container).toBeEmptyDOMElement()
  })

  describe('small array', () => {
    const smallArray = ['a', 'b']

    test('returns a single element if array items fit onto one line', () => {
      const { container } = render(joinJsx(smallArray, 10))
      expect(container).toMatchSnapshot()
    })

    test('uses delimeters if provided', () => {
      const { container } = render(joinJsx(smallArray, 10, '-'))
      expect(container).toMatchSnapshot()
    })
  })

  describe('large array', () => {
    const largeArray = ['aaa', 'bbbb', 'ccccccccc', 'ddd']

    test('returns multiple elements where array items do not fit onto one line', () => {
      expect(joinJsx(largeArray, 8)).toMatchSnapshot()
    })

    test('uses delimeters if provided', () => {
      expect(joinJsx(largeArray, 8, '-')).toMatchSnapshot()
    })
  })
})
