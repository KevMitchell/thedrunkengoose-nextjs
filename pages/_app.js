import PropTypes from 'prop-types'
import Head from 'next/head'
import { TabMenu } from '../components/tab-menu'
import { Filters } from '../components/filters'
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
        <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
      </Head>
      <MainTitle />
      <TabMenu />
      <main>
        <Filters />
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
          width: 85%;
          max-width: 800px;
          height: 100%;
          margin: 30px auto;
        }
      `}</style>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object
}
