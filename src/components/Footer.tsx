import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../assets/logo.svg'
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from 'phosphor-react'

type LinkProps = {
  label: string
  url: string
}

type FooterLinksGroup = {
  name: string
  links: LinkProps[]
}

interface Props {
  links: FooterLinksGroup[]
}

export default function Footer({ links }: Props) {
  return (
    <footer className="pt-20 pb-16 mt-32 bg-[#23272a]">
      <div className="max-w-7xl px-8 mx-auto">
        <div className="min-h-[328px] grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <strong className="text-[#5865f2] text-5xl leading-[0.8] uppercase font-passion block">
              Imagine a place
            </strong>

            <div className="mt-6 text-white flex items-center gap-6">
              <Link href="/">
                <TwitterLogo weight="fill" size={24} />
              </Link>

              <Link href="/">
                <InstagramLogo size={24} />
              </Link>

              <Link href="/">
                <FacebookLogo weight="fill" size={24} />
              </Link>

              <Link href="/">
                <YoutubeLogo weight="fill" size={24} />
              </Link>
            </div>
          </div>

          <div className="pt-2 grid grid-cols-8 gap-5 col-start-5 col-end-13">
            {links.map((group) => (
              <div className="flex flex-col col-span-2" key={group.name}>
                <strong className="text-[#5865f2] font-normal">
                  {group.name}
                </strong>

                <ul>
                  {group.links.map((link) => (
                    <li className="mt-2" key={link.label}>
                      <Link
                        className="text-white text-sm hover:underline"
                        href={link.url}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-[#5865f2] flex justify-between items-center">
          <Image src={logoImg} alt="Discord" width={124} height={34} />

          <Link
            className="h-10 px-4 rounded-full bg-[#5865f2] text-white text-sm flex justify-center items-center transition-colors hover:bg-[hsl(235,86.1%,71.8%)]"
            href="/"
          >
            Sign up
          </Link>
        </div>
      </div>
    </footer>
  )
}
