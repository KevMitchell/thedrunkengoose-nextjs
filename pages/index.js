import DrinkPanel from '../components/drink-panel'
import drinks from '../public/data/drinks.json'
import instructions from '../public/data/instructions.json'

export default function Index () {
  return (
    <>
      {drinks.map(drink =>
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
