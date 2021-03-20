export function MainTitle () {
  return (
    <div className='container'>
      <div className='main-title' />
      <style jsx>{`
        .container {
          padding: 40px 0 0 30px;
        }

        .main-title {
          position: relative;
          top: 0;
          left: 0;
          max-width: 300px;
          max-height: 320px;
          background-image: url('/img/goose-header.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 100%;
          height: 0;
          padding-top: 10%;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  )
}
