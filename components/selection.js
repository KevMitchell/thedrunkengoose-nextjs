import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function Selection ({ options, initialValue, changeListener }) {
  const [selectedItem, setSelectedItem] = useState(initialValue)

  useEffect(() => {
    changeListener(selectedItem)
  })

  return (
    <>
      {options.map(o => {
        return (
          <span
            key={o}
            onClick={() => setSelectedItem(o)}
            className={o === selectedItem ? 'selected' : ''}
          >
            {o}
          </span>
        )
      })}

      <style jsx>{`
        span {
          margin: 10px;
          opacity: 1
        }
        span.selected {
          opacity: 0.6
        }
      `}</style>
    </>
  )
}

Selection.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialValue: PropTypes.string.isRequired,
  changeListener: PropTypes.func.isRequired
}
