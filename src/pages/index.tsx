import { Logo } from '@/components/logo';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Editor de fotos</title>
        <meta
          name='description'
          content='Editor de fotos, remover fondo, optimizar imágenes y mucho más...'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className='flex flex-col'>
          <header className='flex items-center justify-between px-4 leading-[60px] border-b border-gray-700'>
            <Logo />
            <nav className='flex'>
              <a href=''>Editor de fotos</a>
            </nav>
          </header>
          <div className='flex grow'>
            <div className='flex items-center justify-center grow px-4'>
              <img
                className='max-w-full'
                src='https://images.pexels.com/photos/5622626/pexels-photo-5622626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='preview'
              />
            </div>
            <aside className='w-full max-w-md border-l border-gray-700'>
              <ul>
                <li>
                  <span>I</span>
                  <span>Eliminar fondo</span>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
