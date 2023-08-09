// pages/_app.js

import '../styles/globals.css' // adjust the path if your file is located elsewhere

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
