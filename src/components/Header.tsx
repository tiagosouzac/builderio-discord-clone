import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../assets/logo.svg'

const links = [
  {
    label: 'Download',
    href: '/',
  },
  {
    label: 'Nitro',
    href: '/',
  },
  {
    label: 'Discover',
    href: '/',
  },
  {
    label: 'Safety',
    href: '/',
  },
  {
    label: 'Support',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/',
  },
  {
    label: 'Careers',
    href: '/',
  },
]

export const Header = () => {
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
              <Link href={link.href}>{link.label}</Link>
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
