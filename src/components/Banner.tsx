import Image from 'next/image'
import { DownloadSimple } from 'phosphor-react'
import illustration1 from '../assets/images/illustration-1.svg'
import illustration2 from '../assets/images/illustration-2.svg'
import illustration3 from '../assets/images/illustration-3.svg'

interface Props {
  title: string
  description: string
}

export default function Banner({ title, description }: Props) {
  return (
    <div className="w-full max-w-full min-h-[626px] overflow-hidden bg-[#404eed] relative">
      <div className="max-w-[820px] flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <strong className="mb-4 text-white text-7xl text-center font-normal font-passion uppercase">
          {title}
        </strong>

        <strong className="text-white text-xl text-center font-normal">
          {description}
        </strong>

        <div className="mt-6 flex items-center gap-4">
          <a
            className="h-14 px-8 rounded-[28px] text-lg font-medium bg-white flex items-center gap-2"
            href="/"
          >
            <DownloadSimple size={28} />
            Download for Linux
          </a>

          <a
            className="h-14 px-8 rounded-[32px] bg-[#23272a] text-white text-lg font-medium flex items-center transition-colors hover:bg-[hsl(220,7.7%,22.9%)]"
            href="/"
          >
            Open Discord in your browser
          </a>
        </div>
      </div>

      <Image
        className="absolute bottom-0 -left-[80px] z-10"
        src={illustration1}
        alt=""
      />

      <Image
        className="absolute bottom-0 -right-[20px] z-10"
        src={illustration2}
        alt=""
      />

      <Image
        className="h-full object-cover absolute bottom-0"
        src={illustration3}
        alt=""
      />
    </div>
  )
}
