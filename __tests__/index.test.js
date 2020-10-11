import React from 'react'
import { render } from '@testing-library/react'
import Index from '../pages/index'

test('renders hello world', () => {
  const { getByText } = render(<Index />)
  const textElement = getByText(
    /Hello World/
  )
  expect(textElement).toBeInTheDocument()
})