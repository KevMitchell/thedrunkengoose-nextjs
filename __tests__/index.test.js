import { render, fireEvent } from '@testing-library/react'
import Index from '../pages/index'

jest.mock('../public/data/drinks.json', () => [
  {
    name: 'drink1',
    image: 'drink1.jpg',
    difficulty: 'Easy',
    base: 'Whiskey',
    flavour: ['Strong', 'Ginger'],
    ingredients: [
      { name: 'Whiskey (bourbon)', quantity: 50 },
      { name: 'Lemon juice', quantity: 15 }
    ]
  },
  {
    name: 'drink2',
    image: 'drink2.jpg',
    difficulty: 'Hard',
    base: 'Gin',
    flavour: ['Lemonade', 'Ginger'],
    virgin: true,
    ingredients: [
      { name: 'Lemonade', quantity: 50 }
    ]
  }
])

jest.mock('../public/data/instructions.json', () => ({
  drink1: ['inst1', 'inst2'],
  drink2: ['inst3', 'inst4']
}))

const renderComponent = () => {
  const { container, queryByText, getByTestId } = render(<Index />)

  return {
    container,
    queryByText,
    typeFilter: getByTestId('type-filter'),
    difficultyFilter: getByTestId('difficulty-filter'),
    baseFilter: getByTestId('base-filter'),
    flavourFilter: getByTestId('flavour-filter'),
    searchFilter: getByTestId('search')
  }
}

test('renders recipe section', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})

test('filters correctly on type', () => {
  const { queryByText, typeFilter } = renderComponent()

  fireEvent.change(typeFilter, { target: { value: 'alcoholic' } })
  expect(queryByText(/drink1/)).toBeInTheDocument()
  expect(queryByText(/drink2/)).not.toBeInTheDocument()

  fireEvent.change(typeFilter, { target: { value: 'virgin' } })
  expect(queryByText(/drink1/)).not.toBeInTheDocument()
  expect(queryByText(/drink2/)).toBeInTheDocument()
})

test('filters correctly on difficulty', () => {
  const { queryByText, difficultyFilter } = renderComponent()

  fireEvent.change(difficultyFilter, { target: { value: 'Easy' } })

  expect(queryByText(/drink1/)).toBeInTheDocument()
  expect(queryByText(/drink2/)).not.toBeInTheDocument()

  fireEvent.change(difficultyFilter, { target: { value: 'Hard' } })
  expect(queryByText(/drink1/)).not.toBeInTheDocument()
  expect(queryByText(/drink2/)).toBeInTheDocument()
})

test('filters correctly on base', () => {
  const { queryByText, baseFilter } = renderComponent()

  fireEvent.change(baseFilter, { target: { value: 'Gin' } })

  expect(queryByText(/drink1/)).not.toBeInTheDocument()
  expect(queryByText(/drink2/)).toBeInTheDocument()

  fireEvent.change(baseFilter, { target: { value: 'Whiskey' } })
  expect(queryByText(/drink1/)).toBeInTheDocument()
  expect(queryByText(/drink2/)).not.toBeInTheDocument()
})

test('filters correctly on flavour', () => {
  const { queryByText, flavourFilter } = renderComponent()

  fireEvent.change(flavourFilter, { target: { value: 'Ginger' } })

  expect(queryByText(/drink1/)).toBeInTheDocument()
  expect(queryByText(/drink2/)).toBeInTheDocument()

  fireEvent.change(flavourFilter, { target: { value: 'Lemonade' } })
  expect(queryByText(/drink1/)).not.toBeInTheDocument()
  expect(queryByText(/drink2/)).toBeInTheDocument()
})

test('filters correctly on search term', () => {
  const { queryByText, searchFilter } = renderComponent()

  fireEvent.change(searchFilter, { target: { value: 'wh' } })

  expect(queryByText(/drink1/)).toBeInTheDocument()
  expect(queryByText(/drink2/)).not.toBeInTheDocument()

  fireEvent.change(searchFilter, { target: { value: 'gi' } })
  expect(queryByText(/drink1/)).toBeInTheDocument()
  expect(queryByText(/drink2/)).toBeInTheDocument()
})
