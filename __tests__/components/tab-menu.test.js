import { render } from '@testing-library/react'
import { TabMenu } from '../../components/tab-menu'

jest.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => ({
    query: {},
    pathname: '',
    asPath: '/',
    events: {
      emit: jest.fn(),
      on: jest.fn(),
      off: jest.fn()
    },
    push: jest.fn(() => Promise.resolve(true)),
    prefetch: jest.fn(() => Promise.resolve(true)),
    replace: jest.fn(() => Promise.resolve(true))
  })
}))

window.scrollTo = jest.fn()

test('tabMenu renders', () => {
  const { container } = render(<TabMenu />)
  expect(container).toMatchSnapshot()
})

test('tabMenu changes the selection when clicked', async () => {
  const { getByText } = render(<TabMenu />)

  const selection1 = getByText(/About us/)
  selection1.click()
  expect(selection1.className).toContain('selected')

  const selection2 = getByText(/Recipes/)
  expect(selection2.className).not.toContain('selected')
})
