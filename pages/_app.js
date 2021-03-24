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
          z-index: -3;
        }

        @media (max-height: 768px) {
          .background {
            top: 0; 
            left: 0; 
            min-width: 100%;
            min-height: 100%;
            background: url('/img/goose-background.jpg');
            background-attachment: local;
          }
        }

        @media (min-height: 769px) {
          background: url('/img/goose-background.jpg');
          background-repeat: no-repeat;
          background-position: 0, 0;
          background-attachment: fixed;
          background-size: cover;
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
