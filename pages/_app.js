import PropTypes from 'prop-types'
import Head from 'next/head'
import { TabMenu } from '../components/tab-menu'
import { MainTitle } from '../components/main-title'
import { BackToTop } from '../components/back-to-top'
import { Footer } from '../components/footer'
import '../styles.css'

export default function App ({ Component, pageProps = {} }) {
  return (
    <>
      <div className='background'></div>
      <div className='background-left'></div>
      <div className='background-right'></div>
      <Head>
        <title>The Drunken Goose</title>
        <link href='https://fonts.googleapis.com/css?family=Aclonica' rel='stylesheet'></link>
        <meta
          name="description"
          content="The Drunken Goose Website"
        />
        <link rel='prefetch' href='/img/recipecard-long.png' as='image' />
        <link rel='prefetch' href='/img/recipecard-extralong.png' as='image' />
        <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
      </Head>
      <MainTitle />
      <TabMenu />
      <main>
        <Component {...pageProps} />
      </main>
      <BackToTop />
      <Footer />

      <style jsx>{`
        main {
          position: relative;
          top: 0;
          right: 0;
          left: 0;
          text-align: center;
          width: 90%;
          height: 100%;
          margin: 30px auto;
          overflow-x: hidden;
        }

        .background {
          position: fixed;
          width: 100%;
          height: 100%;
          z-index: -4;
          background: url('/img/goose-background.jpg');
        }

        .background-left {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -3;
          background: url('/img/background-left.png');
          background-position: fixed;
          background-repeat: no-repeat;
          background-size: 50% auto;
        }

        .background-right {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: -3;
          background: url('/img/background-right.png');
          background-position: fixed;
          background-repeat: no-repeat;
          background-size: 40% auto;
          background-position: right top;
        }

        @media (max-height: 768px) {
          .background {
            top: 0; 
            left: 0; 
            min-width: 100%;
            min-height: 100%;
            background-attachment: local;
          }

          .background-left {
            top: 0; 
            left: 0; 
            background-attachment: local;
          }

          .background-right {
            top: 0; 
            left: 0; 
            background-attachment: local;
          }
        }

        @media (min-height: 769px) {
          .background {
            background-repeat: no-repeat;
            background-position: 0, 0;
            background-attachment: fixed;
            background-size: cover;
          }

          .background-left, .background-right {
            background-repeat: no-repeat;
            background-attachment: fixed;
          }
        }

        @media (max-width: 410px) {
          main {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object
}
