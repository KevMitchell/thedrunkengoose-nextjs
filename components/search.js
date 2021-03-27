
import { useState, useRef } from 'react'
import useOnClickOutside from '../utils/on-click-outside-hook'
import PropTypes from 'prop-types'

export function Search ({ updateOnLetterEntry }) {
  const ref = useRef()
  const [fieldValue, setFieldValue] = useState('')
  const [expanded, setExpanded] = useState(false)
  useOnClickOutside(ref, () => setExpanded(false))

  const onChange = (event) => {
    setFieldValue(event.target.value)
    updateOnLetterEntry(event.target.value)
  }

  return (
    <div className='search-box'>
      <div
        ref={ref}
        className={`search-container ${expanded ? 'expanded' : ''}`}
        onClick={(e) => setExpanded(true)}
      >
        <div className='search-icon' />
        <input
          className='search-input'
          data-testid='search'
          type='text'
          title='search-input'
          aria-label='Search field'
          value={fieldValue}
          onChange={onChange}
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
          position: relative;
          display: inline-block;
          width: 28px;
          height: 32px;
          margin-top: 10px;
          margin-left: 5px;
          float: left;
          background: url('./img/search-icon.svg');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }

        .search-input {
          background-color: rgba(0, 0, 0, 0);
          display: inline-block;
          width: 98px;
          color: #cab488;
          height: 46px;
          border: none;
          float: right;
          word-break: break-all;
          padding: 0;
          -webkit-transition: width 0.2s ease-in;
          -moz-transition: width 0.2s ease-in;
          -o-transition: width 0.2s ease-in;
          -ms-transition: width 0.2s ease-in;
          transition: width 0.2s ease-in;
        }

        .search-container.expanded .search-input {
          width: 708px;
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

          .search-container.expanded {
            width: 508px;
          }

          .search-container.expanded .search-input {
            width: 466px;
          }
        }

        @media (max-width: 572px) {
          .search-container.expanded {
            width: 406px;
          }

          .search-input {
            width: 48px;
          }

          .search-container.expanded .search-input {
            width: 352px;
          }
        }

        @media (max-width: 460px) {
          .search-container.expanded {
            width: 300px;
          }

          .search-container.expanded .search-input {
            width: 246px;
          }
        }
      `}</style>
    </div>
  )
}

Search.propTypes = {
  updateOnLetterEntry: PropTypes.func.isRequired
}
