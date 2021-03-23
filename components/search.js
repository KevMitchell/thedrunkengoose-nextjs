
import { useState } from 'react'
import PropTypes from 'prop-types'

export function Search ({ updateOnLetterEntry }) {
  const [fieldValue, setFieldValue] = useState('')
  const [expanded, setExpanded] = useState(false)

  const onChange = (event) => {
    setFieldValue(event.target.value)
    updateOnLetterEntry(event.target.value)
  }

  return (
    <div className='search-box'>
      <div className={`search-container ${expanded ? 'expanded' : ''}`}>
        <div className='search-icon' />
        <input
          className='search-input'
          type='text'
          title='search-input'
          value={fieldValue}
          onChange={onChange}
          onClick={() => setExpanded(true)}
          onBlur={() => setExpanded(false)}
        />
      </div>

      <style jsx>{`
        .search-box {
          position: relative;
          display: inline-block;
          vertical-align: top;
          width: 150px;
          height: 50px;
          border: 1px solid #cab488;
          z-index: 2;
        }

        .search-container {
          position: absolute;
          width: 150px;
          height: 50px;
          background-color: #310e04;
          overflow: hidden;
          -webkit-transition: width 0.2s ease-in;
          -moz-transition: width 0.2s ease-in;
          -o-transition: width 0.2s ease-in;
          -ms-transition: width 0.2s ease-in;
          transition: width 0.2s ease-in;
        }

        .search-container.expanded {
          width: 758px;
          -webkit-transition: width 0.2s ease-in;
          -moz-transition: width 0.2s ease-in;
          -o-transition: width 0.2s ease-in;
          -ms-transition: width 0.2s ease-in;
          transition: width 0.2s ease-in;
        }

        .search-icon {
          position: absolute;
          display: inline-block;
          width: 32px;
          height: 32px;
          top: 10px;
          left: 5px;
          background: url('./img/search-icon.svg');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }

        .search-input {
          background-color: rgba(0, 0, 0, 0);
          display: inline-block;
          width: 102px;
          color: #cab488;
          border: none;
          height: 50px;
          margin-left: 40px;
          float: left;
          word-break: break-all;
          -webkit-transition: width 0.2s ease-in;
          -moz-transition: width 0.2s ease-in;
          -o-transition: width 0.2s ease-in;
          -ms-transition: width 0.2s ease-in;
          transition: width 0.2s ease-in;
        }

        .search-container.expanded .search-input {
          width: 758px;
          -webkit-transition: width 0.2s ease-in;
          -moz-transition: width 0.2s ease-in;
          -o-transition: width 0.2s ease-in;
          -ms-transition: width 0.2s ease-in;
          transition: width 0.2s ease-in;
        }

        @media (max-width: 860px) {
          .search-box {
            width: 100px;
          }

          .search-container {
            width: 100px;
          }

          .search-input {
            52px;
          }

          .search-container.expanded {
            width: 508px;
          }

          .search-container.expanded .search-input {
            width: 500px;
          }
        }
      `}</style>
    </div>
  )
}

Search.propTypes = {
  updateOnLetterEntry: PropTypes.func.isRequired
}
