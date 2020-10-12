import { render } from '@testing-library/react'
import Button from '../../components/button'

test('button renders with correct label', () => {
  const { getByText } = render(<Button label='test-title' route='test-route'/>)
  const button = getByText(/test-title/)
  expect(button).toBeInTheDocument()
})

test('button links to the correct route', () => {
  const { getByRole } = render(<Button label='test-title' route='test-route'/>)
  const button = getByRole(/link/)
  expect(button.href).toEqual('http://localhost/test-route')
})