import PropTypes from 'prop-types'
import { Search } from './search'
import { Dropdown } from './dropdown'
import drinks from '../public/data/drinks.json'

const filterUnique = (value, index, self) => self.indexOf(value) === index

export function Filters ({
  handleTypeChange,
  handleDifficultyChange,
  handleBaseChange,
  handleFlavourChange,
  handleSearchChange
}) {
  const drinkTypes = {
    options: [
      { name: 'All types', value: 'all' },
      { name: 'Alcoholic', value: 'alcoholic' },
      { name: 'Virgin', value: 'virgin' }
    ],
    id: 'type-filter',
    label: 'Type filter',
    handleSelect: handleTypeChange
  }

  const difficultyOptions = drinks
    .map(drink => drink.difficulty)
    .filter(filterUnique)
    .map(opt => ({ name: opt, value: opt }))
  const difficulties = {
    options: [
      { name: 'Any effort', value: 'all' },
      ...difficultyOptions
    ],
    id: 'difficulty-filter',
    label: 'Difficulty filter',
    handleSelect: handleDifficultyChange
  }

  const baseOptions = drinks
    .map(drink => drink.base)
    .filter(filterUnique)
    .sort()
    .map(opt => ({ name: opt, value: opt }))
  const bases = {
    options: [
      { name: 'All bases', value: 'all' },
      ...baseOptions
    ],
    id: 'base-filter',
    label: 'Base filter',
    handleSelect: handleBaseChange
  }

  const flavourOptions = drinks
    .map(drink => drink.flavour)
    .flat()
    .filter(filterUnique)
    .sort()
    .map(opt => ({ name: opt, value: opt }))
  const flavours = {
    options: [
      { name: 'All flavour', value: 'all' },
      ...flavourOptions
    ],
    id: 'flavour-filter',
    label: 'Flavour filter',
    handleSelect: handleFlavourChange
  }

  return (
    <div>
      <Search updateOnLetterEntry={handleSearchChange}/>
      <Dropdown {...drinkTypes} />
      <Dropdown {...difficulties} />
      <Dropdown {...bases} />
      <Dropdown {...flavours} />
      <style jsx>{`
        div {
          margin 20px auto;
        }

        select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        .arrowClass {
          top: initial;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  )
}

Filters.propTypes = {
  handleTypeChange: PropTypes.func.isRequired,
  handleDifficultyChange: PropTypes.func.isRequired,
  handleBaseChange: PropTypes.func.isRequired,
  handleFlavourChange: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired
}
