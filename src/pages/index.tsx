import { builder, BuilderComponent } from '@builder.io/react'
import { GetStaticProps } from 'next'
import Footer from '../components/Footer'
import { Header } from '../components/Header'

type Link = {
  label: string
  url: string
}

type FooterLinksGroup = {
  name: string
  links: Link[]
}

interface Props {
  headerLinks: Link[]
  content: any
  footerLinks: FooterLinksGroup[]
}

export default function Home({ headerLinks, content, footerLinks }: Props) {
  return (
    <div>
      <Header links={headerLinks} />
      <BuilderComponent model="home-page" content={content} />
      <Footer links={footerLinks} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const headerLinks = await builder.get('header-links').promise()

  const content = await builder
    .get('home-page', {
      userAttributes: {
        urlPath: '/',
      },
    })
    .toPromise()

  const footerLinks = await builder.get('footer-links').promise()

  return {
    props: {
      headerLinks: headerLinks.data.links ?? [],
      content: content ?? null,
      footerLinks: footerLinks.data.groups ?? [],
    },
  }
}
