import Image from 'next/image'
import logoImg from '../assets/logo.svg'

export const Header = () => {
  return (
    <header className="max-w-6xl h-20 mx-auto grid grid-cols-[124px_auto_124px] justify-between items-center absolute left-0 right-0 z-10">
      <Image src={logoImg} alt="Discord" width={124} height={34} />

      <ul className="flex gap-10">
        <li className="text-white cursor-pointer">Download</li>
        <li className="text-white cursor-pointer">Nitro</li>
        <li className="text-white cursor-pointer">Discover</li>
        <li className="text-white cursor-pointer">Safety</li>
        <li className="text-white cursor-pointer">Support</li>
        <li className="text-white cursor-pointer">Blog</li>
        <li className="text-white cursor-pointer">Careers</li>
      </ul>

      <a
        className="w-16 h-10 rounded-full bg-white text-sm flex justify-center items-center justify-self-end"
        href="/"
      >
        Login
      </a>
    </header>
  )
}
