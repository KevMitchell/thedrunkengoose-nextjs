import { render, fireEvent } from '@testing-library/react'
import Menu from '../pages/menu'

jest.mock('../public/data/drinks.json', () => ([
  {
    name: 'Test Drink1',
    image: 'test.jpg',
    ingredients: [
      { name: 'test ingredient 1', quantity: 10 },
      { name: 'test ingredient 2', quantity: 20 }
    ]
  },
  {
    name: 'Test Drink2',
    image: 'test2.jpg',
    ingredients: [
      { name: 'test ingredient 1', quantity: 10 },
      { name: 'test ingredient 3', quantity: 30 }
    ]
  },
  {
    name: 'Virgin drink',
    image: 'virgin.jpg',
    virgin: true,
    ingredients: [
      { name: 'virgin ingredient 1', quantity: 10 },
      { name: 'virgin ingredient 3', quantity: 30 }
    ]
  }
]))

jest.mock('../public/data/instructions.json', () => ({
  'Test Drink1': [
    'Instruction 1',
    'Instruction 2'
  ]
}))

test('the menu displays drinks and selection items', () => {
  const { container } = render(<Menu />)
  expect(container).toMatchSnapshot()
})

test('the menu shows alcoholic drinks by default', () => {
  const { queryByText } = render(<Menu />)
  const alcoholicDrink1 = queryByText(/Test Drink1/)
  const alcoholicDrink2 = queryByText(/Test Drink2/)
  const virginDrink = queryByText(/Virgin drink/)
  expect(alcoholicDrink1).toBeInTheDocument()
  expect(alcoholicDrink2).toBeInTheDocument()
  expect(virginDrink).toBeNull()
})

test('the menu shows virgin drinks when virgin is selected', () => {
  const { queryByText } = render(<Menu />)
  const virginButton = queryByText(/Virgin/)
  virginButton.click()

  const alcoholicDrink1 = queryByText(/Test Drink1/)
  const alcoholicDrink2 = queryByText(/Test Drink2/)
  const virginDrink = queryByText(/Virgin drink/)
  expect(alcoholicDrink1).toBeNull()
  expect(alcoholicDrink2).toBeNull()
  expect(virginDrink).toBeInTheDocument()
})

test('the menu shows the instructions panel for a clicked on drink', () => {
  const { getByText, getByTestId } = render(<Menu />)
  const drinkButton = getByText(/Test Drink1/)
  drinkButton.click()

  expect(getByTestId('instructionPanel')).toHaveStyle('opacity: 1')
  expect(getByText(/Instruction 1/)).toBeInTheDocument()
  expect(getByText(/Instruction 2/)).toBeInTheDocument()
})

test('the instructions panel is removed when the escape key is pressed', () => {
  const { getByText, getByTestId } = render(<Menu />)
  const drinkButton = getByText(/Test Drink1/)
  drinkButton.click()
  fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })

  expect(getByTestId('instructionPanel')).toHaveStyle('opacity: 0')
})
