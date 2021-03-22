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
          background-image: url('/img/goose-header.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: left center;
          height: 100px;
          max-height: 100px;
          padding-top: 10%;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  )
}
