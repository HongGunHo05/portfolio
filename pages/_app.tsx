import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import '../public/static/fonts/style.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    carrot: '#f4623a',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <div id="portal" />
    </ThemeProvider>
  )
}

export default MyApp
