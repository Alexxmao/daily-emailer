import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from '../constants/theme'

export default function App({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
  <Head>
    <title>I love you Roo &#60;3</title>
  </Head>
  <Component {...pageProps} />
</ChakraProvider>
}
