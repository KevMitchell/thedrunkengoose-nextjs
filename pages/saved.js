import { useEffect, useState } from 'react'
import { DrinkPanel } from '../components/drink-panel'
import { getSaved } from '../utils/saved-drinks'
import drinks from '../public/data/drinks.json'
import instructions from '../public/data/instructions.json'
import { Filters } from '../components/filters'

export default function Saved () {
  const [savedDrinks, setSavedDrinks] = useState([])
  const [currentDrinks, setCurrentDrinks] = useState([])
  const [typeFilter, setTypeFilter] = useState(null)
  const [difficultyFilter, setDifficultyFilter] = useState(null)
  const [baseFilter, setBaseFilter] = useState(null)
  const [flavourFilter, setFlavourFilter] = useState(null)
  const [searchFilter, setSearchFilter] = useState(null)

  useEffect(() => {
    const filteredDrinks = savedDrinks
      .filter(drink => !typeFilter || (!!drink.virgin === (typeFilter !== 'alcoholic')))
      .filter(drink => !difficultyFilter || drink.difficulty === difficultyFilter)
      .filter(drink => !baseFilter || drink.base === baseFilter)
      .filter(drink => !flavourFilter || drink.flavour.includes(flavourFilter))
      .filter(drink => !searchFilter || JSON.stringify(drink).toLowerCase().includes(searchFilter))
      .filter(drink => drink)

    setCurrentDrinks(filteredDrinks)
  }, [savedDrinks, typeFilter, difficultyFilter, baseFilter, flavourFilter, searchFilter])

  const filterByType = ({ target: { value } }) => setTypeFilter(value === 'all' ? null : value)
  const filterByDifficulty = ({ target: { value } }) => setDifficultyFilter(value === 'all' ? null : value)
  const filterByBase = ({ target: { value } }) => setBaseFilter(value === 'all' ? null : value)
  const filterByFlavour = ({ target: { value } }) => setFlavourFilter(value === 'all' ? null : value)
  const filterBySearch = (text) => setSearchFilter(text.length === 0 ? null : text.toLowerCase())

  useEffect(() => {
    const newSavedDrinks = drinks.filter(drink => getSaved(drink.name))
    setSavedDrinks(newSavedDrinks)
  }, [])

  return (
    <>
      <Filters
        handleTypeChange={filterByType}
        handleDifficultyChange={filterByDifficulty}
        handleBaseChange={filterByBase}
        handleFlavourChange={filterByFlavour}
        handleSearchChange={filterBySearch}
      />
      {currentDrinks.map(drink =>
        <DrinkPanel
          name={drink.name}
          key={drink.name}
          image={drink.image}
          difficulty={drink.difficulty}
          base={drink.base}
          flavour={drink.flavour}
          ingredients={drink.ingredients}
          instructions={instructions[drink.name]}
        />
      )}
    </>
  )
}
