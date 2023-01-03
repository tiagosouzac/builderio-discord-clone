import { builder, BuilderComponent } from '@builder.io/react'
import { GetStaticProps } from 'next'
import { Header } from '../components/Header'

interface Props {
  content: any
}

export default function Home({ content }: Props) {
  return (
    <div>
      <Header />

      <BuilderComponent model="home-page" content={content} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = await builder
    .get('home-page', {
      userAttributes: {
        urlPath: '/',
      },
    })
    .toPromise()

  return {
    props: {
      content: content ?? null,
    },
  }
}
