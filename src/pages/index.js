import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import Toolbox from '@/components/Tool'
import Board from '@/components/Board'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Menu />
      <Toolbox />
      <Board />
    </>
  )
}
