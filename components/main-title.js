export function MainTitle () {
  return (
    <>
      <div className='main-title' />
      <style jsx>{`
        .main-title {
          max-height: 320px;
          background-image: url('/img/banner1.jpg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 100%;
          height: 0;
          padding-top: 30%;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  )
}
