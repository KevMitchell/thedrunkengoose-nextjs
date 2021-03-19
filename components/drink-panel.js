import { useState } from 'react'
import PropTypes from 'prop-types'
import { joinJsx } from '../utils/array-join-of-length'

export default function DrinkPanel ({ name, image, difficulty, base, flavour, ingredients, instructions }) {
  const [expanded, setExpanded] = useState(false)

  const getIngredientText = (ing) => {
    const alternativeText = ing.alternative ? ` or ${ing.alternative}` : ''
    const measure = ing.name.toLowerCase() === 'cherries'
      ? ' '
      : ing.dashes ? ' dashes ' : 'ml '

    const quantity = ing.quantity ? ing.quantity + measure : ''
    let text = quantity + ing.name
    if (ing.optional) text += ' (optional)'
    return (text + alternativeText).toUpperCase()
  }

  return (
    <div
      className={`drinkPanel ${expanded ? 'expanded' : ''}`}
      data-testid='drinkPanel'
    >
      <div className='title'>{name}</div>
      <div className='topPanel'>
        <div className='overview'>
          {image && (
            <div className='imageContainer'>
              <img
                className='image'
                src={`./img/drinks/${image}`}
                alt={name}
              />
            </div>
          )}
          <div className='overviewText'>
            <div className='difficulty'>
              {difficulty}
            </div>
            <div className='base'>
              {base}
            </div>
            <div className='flavour'>
              {flavour}
            </div>
          </div>
        </div>

        <div className='ingredients'>
          {ingredients && joinJsx(ingredients.map(getIngredientText), 40, ' • ')}
        </div>

        <div className='methodExpander' onClick={() => setExpanded(!expanded)}>
          Method {expanded ? '▲' : '▼'}
        </div>
      </div>

      <div className={`instructions ${expanded ? 'expanded' : ''}`}>
        {instructions.map(i =>
          <div
            key={i}
            className='instructionLine'>
            {i}
          </div>
        )}
      </div>

      <style jsx>{`
        .drinkPanel {
          display: block;
          background-color: aliceblue;
          margin: 0 5% 20px 4%;
          height: 320px;
          box-sizing: border-box;
          width: 90%;
          max-width: 600px;
          top: 10px;
          z-index: -1;
          -webkit-transition: height 0.5s ease-out;
          -moz-transition: height 0.5s ease-out;
          -o-transition: height 0.5s ease-out;
          -ms-transition: height 0.5s ease-out;
          transition: height 0.5s ease-out;
        }

        .drinkPanel.expanded {
          min-height: 320px;
          height: 520px;
          overflow: visible;
          -webkit-transition: height 0.5s ease-out;
          -moz-transition: height 0.5s ease-out;
          -o-transition: height 0.5s ease-out;
          -ms-transition: height 0.5s ease-out;
          transition: height 0.5s ease-out;
        }

        .topPanel {
          height: 270px;
          position: relative;
        }
        
        .title {
          vertical-align: top;
          padding: 10px;
          border-bottom: 1px solid black;
        }

        .overview {
          padding: 10px;
        }
        
        .imageContainer {
          display: inline-block;
          margin-right: 20px;
        }

        .image {
          height: 120px;
        }

        .overviewText {
          display: inline-block;
          vertical-align: top;
        }

        .difficulty {
          text-align: left;
          padding: 10px 0;
        }

        .base {
          text-align: left;
          padding-bottom: 10px;
        }

        .flavour {
          text-align: left;
          padding-bottom: 10px;
        }

        .methodExpander {
          position: absolute;
          bottom: 0;
          cursor: pointer;
          padding: 5px;
        }
        
        .title {
          color: grey;
          font-style: italic;
          font-size: 24px;
        }

        .ingredients {
          width: 80%;
          margin: auto;
        }
        
        .instructions {
          position: relative;
          padding: 20px;
          max-width: 700px;
          text-align: left;
          opacity: 0;
          -webkit-transition: opacity 0.2s ease-out;
          -moz-transition: opacity 0.2s ease-out;
          -o-transition: opacity 0.2s ease-out;
          -ms-transition: opacity 0.2s ease-out;
          transition: opacity 0.2s ease-out;
        }

        .instructions.expanded {
          opacity: 1;
          -webkit-transition: opacity 0.5s ease-out;
          -moz-transition: opacity 0.5s ease-out;
          -o-transition: opacity 0.5s ease-out;
          -ms-transition: opacity 0.5s ease-out;
          transition: opacity 0.5s ease-out;
          transition-delay: 300ms;
        }
        
        .instructionLine {
          display: list-item;
        }
      `}</style>
    </div>
  )
}

DrinkPanel.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
  flavour: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired
}
