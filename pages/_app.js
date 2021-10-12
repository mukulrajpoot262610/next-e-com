import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import '../style/global.css'

import store from '../store/store'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component  {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
