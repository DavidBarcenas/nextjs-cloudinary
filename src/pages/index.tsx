import { Logo } from '@/components/logo';
import Head from 'next/head';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Home() {
  const [files, setFiles] = useState<any[]>([]);
  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
  }, []);
  const { getRootProps, getInputProps, isDragActive, isFileDialogActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    maxFiles: 1,
  });

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', files[0]);
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
          <header className='flex items-center justify-between px-4 leading-[60px] border-b border-gray-700'>
            <Logo />
            <nav className='flex'>
              <a href=''>Editor de fotos</a>
            </nav>
          </header>
          <div className='flex grow overflow-hidden'>
            <div className='flex items-center justify-center grow h-full'>
              <div className='w-full h-full p-8 '>
                {files[0] ? (
                  <img
                    className='object-cover h-full m-auto'
                    src={files[0]?.preview}
                    // Revoke data uri after image is loaded
                    onLoad={() => {
                      URL.revokeObjectURL(files[0].preview);
                    }}
                  />
                ) : (
                  <div
                    {...getRootProps()}
                    className={`w-full h-full ${isFileDialogActive ? 'bg-red-400' : ''}`}
                  >
                    <input {...getInputProps()} />
                  </div>
                )}
              </div>
            </div>
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
