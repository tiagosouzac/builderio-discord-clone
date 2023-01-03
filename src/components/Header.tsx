import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../assets/logo.svg'

type LinkProps = {
  label: string
  url: string
}

interface Props {
  links: LinkProps[]
}

export const Header = ({ links }: Props) => {
  return (
    <header className="max-w-6xl h-20 mx-auto grid grid-cols-[124px_auto_124px] justify-between items-center absolute left-0 right-0 z-10">
      <Image src={logoImg} alt="Discord" width={124} height={34} />

      <nav>
        <ul className="flex gap-10">
          {links.map((link) => (
            <li
              key={link.label}
              className="text-white font-bold hover:underline"
            >
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <a
        className="w-16 h-10 rounded-full bg-white text-sm flex justify-center items-center justify-self-end"
        href="/"
      >
        Login
      </a>
    </header>
  )
}
