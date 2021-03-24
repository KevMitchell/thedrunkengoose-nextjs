export function BackToTop () {
  const onClick = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <div className='button' onClick={onClick}/>

      <style jsx>{`
        div {
          position: fixed;
          bottom: 10px;
          right: 10px;
          width: 50px;
          height: 50px;
          background: url('./img/back-to-top.svg');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
