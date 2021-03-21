import { fireEvent, render, wait } from '@testing-library/react'
import { DrinkPanel } from '../../components/drink-panel'
import { toggleSaved, getSaved } from '../../utils/saved-drinks'

const testIngredients = [{
  name: 'ing1', quantity: 10
},
{
  name: 'ing2', quantity: 20, alternative: 'ing3'
},
{
  name: 'ing4', quantity: 5, optional: true
}]

const mockDrink = {
  name: 'test-name',
  image: 'test-image',
  difficulty: 'test-difficulty',
  base: 'test-base',
  flavour: ['test1', 'test2'],
  ingredients: testIngredients,
  instructions: ['inst1', 'inst2']
}

jest.mock('../../utils/saved-drinks', () => ({
  toggleSaved: jest.fn(),
  getSaved: jest.fn()
}))

test('renders the supplied drink', () => {
  const { container } = render(<DrinkPanel { ...mockDrink } />)
  expect(container).toMatchSnapshot()
})

test('gets the saved drinks after render', () => {
  render(<DrinkPanel { ...mockDrink } />)
  expect(getSaved).toHaveBeenCalled()
})

test('clicking the method label expands and contracts the panel', () => {
  const { getByText, getByTestId } = render(<DrinkPanel { ...mockDrink } />)
  const methodExpander = getByText(/Method/)

  fireEvent.click(methodExpander)
  expect(getByTestId('instructions').className).toContain('expanded')

  fireEvent.click(methodExpander)
  expect(getByTestId('instructions').className).not.toContain('expanded')
})

test('clicking the add to saved label records the saved state', () => {
  const { getByText } = render(<DrinkPanel { ...mockDrink } />)
  const addToSaved = getByText(/Add to saved/)

  wait(() => {
    fireEvent.click(addToSaved)
    expect(toggleSaved).toHaveBeenCalledWith('test-name', true)
  })

  wait(() => {
    fireEvent.click(addToSaved)
    expect(toggleSaved).toHaveBeenCalledWith('test-name', false)
  })
})
