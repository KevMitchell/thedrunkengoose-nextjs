import Link from 'next/link'
import PropTypes from "prop-types"

export default function Button({ route, label }) {
  return (
    <>
      <Link href={route}>
        <a>{label}</a>
      </Link>

      <style jsx>{`
        div {
          display: block;
          width: 150px;
          height: 40px;
          background-image: url(/img/smear.png);
          background-repeat: no-repeat;
          background-size: contain;
          text-align: center;
          padding-top: 14px;
          font-size: 20px;
          text-decoration: none;
          cursor: pointer;
          color: black;
        }
      `}</style>
    </>
  )
}

Button.propTypes = {
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}