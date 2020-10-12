import Button from './button'

export default function Navigation () {
  return (
    <>
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