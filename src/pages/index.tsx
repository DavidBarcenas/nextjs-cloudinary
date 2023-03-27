import Head from 'next/head';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { ImageArea } from '@/components/image-area';

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
          <Header />
          <div className='flex grow overflow-hidden'>
            <ImageArea />
            <Sidebar />
          </div>
        </section>
      </main>
    </>
  );
}
