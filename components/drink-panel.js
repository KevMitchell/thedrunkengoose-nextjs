import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { joinJsx } from '../utils/array-join-of-length'
import { toggleSaved, getSaved } from '../utils/saved-drinks'

export function DrinkPanel ({ name, image, difficulty, base, flavour, ingredients, instructions, longDescription }) {
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

  const drinkPanelClass = longDescription ? 'drink-panel long' : 'drink-panel'
  const largeImageClass = longDescription ? 'larger-image long' : 'larger-image'
  const titleClass = name.length > 18 ? 'title long' : 'title'

  return (
    <div
      className={`${drinkPanelClass} ${expanded ? 'expanded' : ''}`}
      data-testid='drinkPanel'
    >
      <div className={`standard-image ${expanded ? 'hide' : ''}`} />
      <div className={`${largeImageClass} ${expanded ? 'show' : ''}`} />
      <div className={titleClass}>{name}</div>
      <div className='top-panel'>
        <div className='overview'>
          {image && (
            <div className='image-container'>
              <img
                className='image'
                src={`./img/drinks/${image}`}
                alt={name}
              />
            </div>
          )}
          <div className='overviewText'>
            <div className='difficulty'>
              <span className='icon difficulty-icon' /> {difficulty}
            </div>
            <div className='base'>
              <span className='icon base-icon' /> {base}
            </div>
            <div className='flavour'>
              <span className='icon flavour-icon' /> {flavour.join(', ')}
            </div>
          </div>
        </div>

        <div className='ingredients'>
          {ingredients && joinJsx(ingredients.map(getIngredientText), 32, '  •  ')}
        </div>

        <div className='method-expander' onClick={() => setExpanded(!expanded)}>
          Method <span className={`icon ${expanded ? 'retract-arrow' : 'expand-arrow'}`} />
        </div>

        <div className='add-to-saved' onClick={() => toggleSavedState()}>
          <div ref={heartRef} className={saved ? 'heart filled' : 'heart'} />
          <div className='saved-text'>{saved ? 'Saved' : 'Add to saved'}</div>
        </div>
      </div>

      <div data-testid='instructions' className={`instructions ${expanded ? 'expanded' : ''}`}>
        {instructions.map((inst, index) =>
          <div
            key={`${name}-${index}`}
            className='instruction-line'>
            {`${index + 1}. ${inst}`}
          </div>
        )}
      </div>

      <style jsx>{`
        .drink-panel {
          position: relative;
          display: inline-block;
          vertical-align: top;
          font-family: Cambria Math;
          font-size: 0.8em;
          margin: 0 5px 20px 5px;
          height: 434px;
          width: 363px;
          top: 10px;
          font-size: 1.5em;
          overflow: hidden;
          -webkit-transition: height 0.5s ease-out;
          -moz-transition: height 0.5s ease-out;
          -o-transition: height 0.5s ease-out;
          -ms-transition: height 0.5s ease-out;
          transition: height 0.5s ease-out;
        }

        .standard-image {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url('./img/recipecard-short.png');
          background-repeat: no-repeat;
          opacity: 1;
          -webkit-transition: opacity 0.2s ease-in;
          -moz-transition: opacity 0.2s ease-in;
          -o-transition: opacity 0.2s ease-in;
          -ms-transition: opacity 0.2s ease-in;
          transition: opacity 0.2s ease-in;
        }

        .standard-image.hide {
          opacity: 0;
          -webkit-transition: opacity 0.2s ease-in;
          -moz-transition: opacity 0.2s ease-in;
          -o-transition: opacity 0.2s ease-in;
          -ms-transition: opacity 0.2s ease-in;
          transition: opacity 0.2s ease-in;
        }

        .larger-image {
          background: url('./img/recipecard-long.png');
        }

        .larger-image.long {
          background: url('./img/recipecard-extralong.png');
        }

        .larger-image {
          position: absolute;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          opacity: 0;
          -webkit-transition: opacity 0.5s ease-in 0.2s;
          -moz-transition: opacity 0.5s ease-in 0.2s;
          -o-transition: opacity 0.5s ease-in 0.2s;
          -ms-transition: opacity 0.5s ease-in 0.2s;
          transition: opacity 0.5s ease-in 0.2s;
        }

        .larger-image.show {
          opacity: 1;
          -webkit-transition: opacity 0s ease-in;
          -moz-transition: opacity 0s ease-in;
          -o-transition: opacity 0s ease-in;
          -ms-transition: opacity 0s ease-in;
          transition: opacity 0s ease-in;
        }

        .drink-panel.long {
          -webkit-transition: height 0.5s ease-out;
          -moz-transition: height 0.5s ease-out;
          -o-transition: height 0.5s ease-out;
          -ms-transition: height 0.5s ease-out;
          transition: height 0.5s ease-out;
        }

        .drink-panel.expanded {
          min-height: 434px;
          height: 580px;
          overflow: visible;
          -webkit-transition: height 0.5s ease-out;
          -moz-transition: height 0.5s ease-out;
          -o-transition: height 0.5s ease-out;
          -ms-transition: height 0.5s ease-out;
          transition: height 0.5s ease-out;
        }

        .drink-panel.long.expanded {
          min-height: 434px;
          height: 694px;
        }

        .top-panel {
          height: 300px;
          position: relative;
        }
        
        .title {
          position: relative;
          height: 33px;
          padding-top: 22px;
          z-index: 2;
        }

        .title.long {
          font-size: 0.8em;
          line-height: 32px;
        }

        .overview {
          padding: 10px;
        }
        
        .image-container {
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

        .difficulty-icon {
          background: url('./img/star-icon.svg');
        }

        .base-icon {
          background: url('./img/base-icon.svg');
        }

        .flavour-icon {
          background: url('./img/flavour-icon.svg');
        }

        .icon {
          display: inline-block;
          width: 18px;
          height: 18px;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          vertical-align: -2px;
        }

        .base {
          text-align: left;
          padding-bottom: 10px;
        }

        .flavour {
          text-align: left;
          padding-bottom: 10px;
        }

        .method-expander {
          position: absolute;
          bottom: 0;
          cursor: pointer;
          padding: 5px 5px 5px 35px;
          font-size: 22px;
        }

        .expand-arrow {
          background: url('./img/expand-arrow.svg');
          background-repeat: no-repeat;
          -moz-transform: scaleY(-1);
          -o-transform: scaleY(-1);
          -webkit-transform: scaleY(-1);
          transform: scaleY(-1);
          filter: FlipV;
          -ms-filter: "FlipV";
        }

        .retract-arrow {
          background: url('./img/expand-arrow.svg');
          background-repeat: no-repeat;
        }

        .add-to-saved {
          position: absolute;
          bottom: 0;
          right: 30px;
          cursor: pointer;
          padding: 5px 0 5px 0;
          vertical-align: middle;
        }

        .heart {
          display: inline-block;
          width: 14px;
          height: 14px;
          padding-left: 12px;
          background: url('./img/heart.svg');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          transform: scale(1);
          transform-origin: 50% 50%;
        }

        .heart.filled {
          background: url('./img/heart-filled.svg');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          transform-origin: 50% 50%;
          transform: scale(1);
        }

        .heart.pulse {
          padding-top: 1px;
          padding-right: 1px;
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

        .saved-text {
          display: inline-block;
          width: 130px;
          text-align: left;
          font-size: 22px;
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
          font-size: 16px;
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

        @media (max-width: 410px) {
          .drink-panel {
            margin: 0 0 30px 0;
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
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  longDescription: PropTypes.bool
}
