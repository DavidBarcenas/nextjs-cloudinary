import { Dropzone } from '@/components/dropzone';
import { Header } from '@/components/header';
import Head from 'next/head';

export default function Home() {
  const uploadFile = async () => {
    const formData = new FormData();
    // formData.append('file', files[0]);
    const uploadImage = await fetch('/api/upload-file', {
      method: 'POST',
      body: formData,
    });
    const res = await uploadImage.json();
    console.log(res);
  };

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
            <Dropzone />
            <aside className='w-full max-w-xs border-l border-gray-700'>
              <ul>
                <li onClick={uploadFile}>
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
