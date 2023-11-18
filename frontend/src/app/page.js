import Image from 'next/image'
import Search from '../app/components/search'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search />
    </main>
  )
}
