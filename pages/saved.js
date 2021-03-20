import { useEffect, useState } from 'react'
import { DrinkPanel } from '../components/drink-panel'
import { getSaved } from '../utils/saved-drinks'
import drinks from '../public/data/drinks.json'
import instructions from '../public/data/instructions.json'

export default function Saved () {
  const [savedDrinks, setSavedDrinks] = useState([])

  useEffect(() => {
    const newSavedDrinks = drinks.filter(drink => getSaved(drink.name))
    setSavedDrinks(newSavedDrinks)
  }, [])

  return (
    <>
      {savedDrinks.map(drink =>
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
