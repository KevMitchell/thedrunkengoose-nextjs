import Link from 'next/link'
import Button from './button'

export default function Navigation () {
  return (
    <div>
      <Link href={'/'}>
        <img
          src='./img/full-logo.png'
          className='goose-title'
          alt='The Drunken Goose'
        />
      </Link>
      <Button
        route={'/about'}
        label={'About us'}
      />
      <Button
        route={'/menu'}
        label={'Menu'}
      />

      <style jsx>{`
        div {
          float: left;
          margin-right: 20px;
          position: absolute;
          z-index: 2;
        }
        img {
          cursor: pointer;
        }
        @media (max-width: 780px) {
          div {
            position: relative;
          }
        }
      `}</style>
    </div>
  )
}
