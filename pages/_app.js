import PropTypes from 'prop-types'
import Head from 'next/head'
import { TabMenu } from '../components/tab-menu'
import { MainTitle } from '../components/main-title'
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
        }

        .background {
          position: fixed;
          width: 100%;
          height: 100%;
          background: url('/img/goose-background.jpg');
          background-repeat: no-repeat;
          background-position: 0, 0;
          background-attachment: fixed;
          background-size: cover;
          z-index: -3;
        }
      `}</style>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object
}
