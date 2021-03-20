import { fireEvent, render } from '@testing-library/react'
import { DrinkPanel } from '../../components/drink-panel'

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

test('renders the supplied drink', () => {
  const { container } = render(
    <DrinkPanel
      { ...mockDrink }
    />
  )

  expect(container).toMatchSnapshot()
})

test('clicking the method label expands and contracts the panel', () => {
  const { getByText, getByTestId } = render(<DrinkPanel { ...mockDrink } />)
  const methodExpander = getByText(/Method/)

  fireEvent.click(methodExpander)
  expect(getByTestId('instructions').className).toContain('expanded')

  fireEvent.click(methodExpander)
  expect(getByTestId('instructions').className).not.toContain('expanded')
})
