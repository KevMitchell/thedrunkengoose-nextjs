import Button from './button'

export default function Navigation () {
  return (
    <>
      <div>
        <img src='./img/full-logo.png' className='goose-title' alt='The Drunken Goose' />
      </div>
      <Button
        route={'/About'}
        label={'About us'}
      />
      <Button
        route={'/menu'}
        label={'Alcoholic'}
      />
      <Button
        route={'/menu'}
        label={'Virgin'}
      />
    </>
  )
}
