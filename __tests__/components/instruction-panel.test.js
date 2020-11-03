import React from 'react'
import { render } from '@testing-library/react'
import { InstructionPanel } from '../../components/instruction-panel'

test('creates the instructions panel component', () => {
  const { container } = render(<InstructionPanel
    name = 'test drink name'
    image = 'testimage.jpg'
    ingredients = {[
      { name: 'test-ingredient', quantity: 60 },
      { name: 'less-ingredient', quantity: 30 }
    ]}
    instructions = {['test instruction1', 'test instruction2']}
    closeInstructions = {jest.fn()}
  />)
  expect(container).toMatchSnapshot()
})

test('modifies instructions for alternative ingredients', () => {
  const { getByText } = render(<InstructionPanel
    name = 'test drink name'
    image = 'testimage.jpg'
    ingredients = {[
      { name: 'test-ingredient', quantity: 60 },
      { name: 'test-alt', quantity: 15, alternative: 'test-other' }
    ]}
    instructions = {['test instruction1', 'test instruction2']}
    closeInstructions = {jest.fn()}
  />)
  expect(getByText(/15ml test-alt or test-other/)).toBeInTheDocument()
})

test('modifies instructions for optional ingredients', () => {
  const { getByText } = render(<InstructionPanel
    name = 'test drink name'
    image = 'testimage.jpg'
    ingredients = {[
      { name: 'test-ingredient', quantity: 60 },
      { name: 'test-optional', quantity: 6, optional: true }
    ]}
    instructions = {['test instruction1', 'test instruction2']}
    closeInstructions = {jest.fn()}
  />)
  expect(getByText(/6ml test-optional \(optional\)/)).toBeInTheDocument()
})

test('modifies instructions for dashes', () => {
  const { getByText } = render(<InstructionPanel
    name = 'test drink name'
    image = 'testimage.jpg'
    ingredients = {[
      { name: 'test-ingredient', quantity: 60 },
      { name: 'test-dashes', quantity: 1, dashes: true }
    ]}
    instructions = {['test instruction1', 'test instruction2']}
    closeInstructions = {jest.fn()}
  />)
  expect(getByText(/1 dashes test-dashes/)).toBeInTheDocument()
})

test('the close instructions callback is called when the close symbol is pressed', () => {
  const close = jest.fn()

  const { getByText } = render(<InstructionPanel
    name = 'test drink name'
    image = 'testimage.jpg'
    ingredients = {[
      { name: 'test-ingredient', quantity: 60 },
      { name: 'test-dashes', quantity: 1, dashes: true }
    ]}
    instructions = {['test instruction1', 'test instruction2']}
    closeInstructions = {close}
  />)

  const closeButton = getByText(/X/)
  closeButton.click()
  expect(close).toBeCalled()
})
