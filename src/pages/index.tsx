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
      <main className='w-full h-screen'>
        <section className='flex flex-col w-full h-full'>
          <header className='flex items-center justify-between px-4 leading-[60px] border-b border-gray-700'>
            <Logo />
            <nav className='flex'>
              <a href=''>Editor de fotos</a>
            </nav>
          </header>
          <div className='flex grow overflow-hidden'>
            <div className='flex items-center justify-center grow h-full'>
              <div className='w-full h-full p-8'>
                <img
                  className='object-cover h-full m-auto'
                  src='https://images.pexels.com/photos/1925482/pexels-photo-1925482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt='preview'
                />
              </div>
            </div>
            <aside className='w-full max-w-xs border-l border-gray-700'>
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
