import { render, wait } from '@testing-library/react'
import App from '../pages/_app'

const component = () => <div />

test('renders navigation', async () => {
  const { getAllByRole } = render(<App Component={component} />)
  await wait(() => {
    expect(getAllByRole(/link/)).toMatchSnapshot()
  })
})

test('renders the footer', async () => {
  const { getByText } = render(<App Component={component} />)
  await wait(() => {
    expect(getByText(/Copyright © Kevin Mitchell, 2021. UX Design by Nichola Evans/)).toBeInTheDocument()
  })
})
