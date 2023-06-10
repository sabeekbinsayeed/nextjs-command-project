import Feed from '@components/Feed'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full flex-center flex-col">
      <h1 className='text-2xl font-bold text-black-500 text-center'>Discover and share  <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI powered prmots</span></h1>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quasi illum commodi maiores consectetur facilis ex dignissimos id veniam placeat voluptate ratione sit aut, quisquam odio recusandae vitae, rem aliquid.</p>


      <Feed></Feed>

    </main>
  )
}
