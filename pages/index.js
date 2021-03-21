import { useEffect, useState } from 'react'
import { DrinkPanel } from '../components/drink-panel'
import drinks from '../public/data/drinks.json'
import instructions from '../public/data/instructions.json'
import { Filters } from '../components/filters'

export default function Index () {
  const [currentDrinks, setCurrentDrinks] = useState(drinks)
  const [typeFilter, setTypeFilter] = useState(null)
  const [difficultyFilter, setDifficultyFilter] = useState(null)
  const [baseFilter, setBaseFilter] = useState(null)
  const [flavourFilter, setFlavourFilter] = useState(null)

  useEffect(() => {
    const filteredDrinks = drinks
      .filter(drink => !typeFilter || (!!drink.virgin === (typeFilter !== 'alcoholic')))
      .filter(drink => !difficultyFilter || drink.difficulty === difficultyFilter)
      .filter(drink => !baseFilter || drink.base === baseFilter)
      .filter(drink => !flavourFilter || drink.flavour.includes(flavourFilter))
      .filter(drink => drink)

    setCurrentDrinks(filteredDrinks)
  }, [typeFilter, difficultyFilter, baseFilter, flavourFilter])

  const filterByType = ({ target: { value } }) => setTypeFilter(value === 'all' ? null : value)
  const filterByDifficulty = ({ target: { value } }) => setDifficultyFilter(value === 'all' ? null : value)
  const filterByBase = ({ target: { value } }) => setBaseFilter(value === 'all' ? null : value)
  const filterByFlavour = ({ target: { value } }) => setFlavourFilter(value === 'all' ? null : value)

  return (
    <>
      <Filters
        handleTypeChange={filterByType}
        handleDifficultyChange={filterByDifficulty}
        handleBaseChange={filterByBase}
        handleFlavourChange={filterByFlavour}
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
