import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import '../components'
import '../styles/globals.css'

builder.init('11025b6428f54746ad6bda1f6f262a18')

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
