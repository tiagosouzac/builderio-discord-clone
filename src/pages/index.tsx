import { builder, BuilderComponent } from '@builder.io/react'
import { GetStaticProps } from 'next'
import { Header } from '../components/Header'

type Link = {
  label: string
  url: string
}

interface Props {
  headerLinks: Link[]
  content: any
}

export default function Home({ headerLinks, content }: Props) {
  return (
    <div>
      <Header links={headerLinks} />

      <BuilderComponent model="home-page" content={content} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const userAttributes = {
    urlPath: '/',
  }

  const headerLinks = await builder
    .get('header-links', { userAttributes })
    .promise()

  const content = await builder.get('home-page', { userAttributes }).toPromise()

  return {
    props: {
      headerLinks: headerLinks.data.links ?? [],
      content: content ?? null,
    },
  }
}
