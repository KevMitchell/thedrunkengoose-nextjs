import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { joinJsx } from '../utils/array-join-of-length'
import { toggleSaved, getSaved } from '../utils/saved-drinks'

export function DrinkPanel ({ name, image, difficulty, base, flavour, ingredients, instructions }) {
  const [saved, setSaved] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const heartRef = useRef(null)

  useEffect(() => {
    setSaved(getSaved(name))
  }, [])

  const getIngredientText = (ing) => {
    const alternativeText = ing.alternative ? ` or ${ing.alternative}` : ''
    const measure = ing.name.toLowerCase() === 'cherries'
      ? ' '
      : ing.dashes ? ' dashes ' : 'ml '

    const quantity = ing.quantity ? ing.quantity + measure : ''
    let text = quantity + ing.name
    if (ing.optional) text += ' (optional)'
    return (text + alternativeText).toUpperCase().replace(/ML/g, 'ml')
  }

  const toggleSavedState = () => {
    heartRef.current.className = `${heartRef.current.className} pulse`
    setTimeout(() => {
      heartRef.current.className = heartRef.current.className.replaceAll('pulse', '')
      toggleSaved(name, !saved)
      setSaved(!saved)
    }, 200)
  }

  const drinkPanelClass = instructions.length > 5 ? 'drinkPanel long' : 'drinkPanel'
  const titleClass = name.length > 18 ? 'title long' : 'title'

  return (
    <div
      className={`${drinkPanelClass} ${expanded ? 'expanded' : ''}`}
      data-testid='drinkPanel'
    >
      <div className={titleClass}>{name}</div>
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
              {flavour.join(', ')}
            </div>
          </div>
        </div>

        <div className='ingredients'>
          {ingredients && joinJsx(ingredients.map(getIngredientText), 32, '  •  ')}
        </div>

        <div className='methodExpander' onClick={() => setExpanded(!expanded)}>
          Method {expanded ? '▲' : '▼'}
        </div>

        <div className='addToSaved' onClick={() => toggleSavedState()}>
          <div ref={heartRef} className={saved ? 'heart filled' : 'heart'} />Add to saved
        </div>
      </div>

      <div data-testid='instructions' className={`instructions ${expanded ? 'expanded' : ''}`}>
        {instructions.map((inst, index) =>
          <div
            key={`${name}-${index}`}
            className='instructionLine'>
            {`• ${inst}`}
          </div>
        )}
      </div>

      <style jsx>{`
        .drinkPanel {
          display: inline-block;
          vertical-align: top;
          background: url('./img/recipecard-short.jpg');
          background-repeat: no-repeat;
          font-family: Cambria Math;
          font-size: 0.8em;
          margin: 0 5px 20px 5px;
          height: 348px;
          width: 363px;
          top: 10px;
          font-size: 1.5em;
          z-index: -1;
          overflow: hidden;
          -webkit-transition: height 0.5s ease-out, background 0s ease-out 0.5s;
          -moz-transition: height 0.5s ease-out, background 0s ease-out 0.5s;
          -o-transition: height 0.5s ease-out, background 0s ease-out 0.5s;
          -ms-transition: height 0.5s ease-out, background 0s ease-out 0.5s;
          transition: height 0.5s ease-out, background 0s ease-out 0.5s;
        }

        .drinkPanel.long {
          -webkit-transition: height 0.5s ease-out, background 0s ease-out 0.6s;
          -moz-transition: height 0.5s ease-out, background 0s ease-out 0.6s;
          -o-transition: height 0.5s ease-out, background 0s ease-out 0.6s;
          -ms-transition: height 0.5s ease-out, background 0s ease-out 0.6s;
          transition: height 0.5s ease-out, background 0s ease-out 0.6s;
        }

        .drinkPanel.expanded {
          background: url('./img/recipecard-long.jpg');
          min-height: 348px;
          height: 512px;
          overflow: visible;
          -webkit-transition: height 0.5s ease-out, background 0s ease-out;
          -moz-transition: height 0.5s ease-out, background 0s ease-out;
          -o-transition: height 0.5s ease-out, background 0s ease-out;
          -ms-transition: height 0.5s ease-out, background 0s ease-out;
          transition: height 0.5s ease-out, background 0s ease-out;
        }

        .drinkPanel.expanded.long {
          background: url('./img/recipecard-extralong.jpg');
          min-height: 348px;
          height: 740px;
        }

        .topPanel {
          height: 290px;
          position: relative;
        }
        
        .title {
          margin-top: 23px;
        }

        .title.long {
          font-size: 0.8em;
          margin-top: 29px;
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
          font-size: 0.8em;
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
          padding: 5px 5px 5px 10px;
        }

        .heart {
          display: inline-block;
          width: 20px;
          height: 16px;
          padding-left: 14px;
          background: url('./img/heart.svg');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          transform: scale(1);
        }

        .heart.filled {
          background: url('./img/heart-filled.svg');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }

        .heart.pulse {
          transform: scale(1.1);
          animation: pulse 0.2s 1;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
        
          70% {
            transform: scale(1.1);
          }
        
          100% {
            transform: scale(1);
          }
        }

        .addToSaved {
          position: absolute;
          bottom: 0;
          right: 0;
          cursor: pointer;
          padding: 5px 10px 5px 0;
          vertical-align: middle;
        }
        
        .title {
          font-size: 28px;
          text-transform: uppercase;
          font-family: 'FenwickWoodtype';
        }

        .ingredients {
          width: 90%;
          margin: auto;
          letter-spacing: 1px;
          font-size: 0.7em;
        }
        
        .instructions {
          position: relative;
          padding: 20px;
          text-align: left;
          font-size: 0.8em;
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
  flavour: PropTypes.arrayOf(PropTypes.string).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired
}
