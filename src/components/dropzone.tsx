import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ChevronUp, UploadIcon } from './icons';
import { useFileStore } from '@/stores/files';

export function Dropzone() {
  const setFile = useFileStore((state) => state.setFile);
  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const uploadImage = await fetch('/api/upload-file', {
      method: 'POST',
      body: formData,
    });
    const response = await uploadImage.json();
    setFile(response.data);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    uploadFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isFileDialogActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    maxFiles: 1,
  });

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div
        {...getRootProps()}
        className={`flex flex-col items-center max-w-xl mb-14 p-12 ${
          isFileDialogActive || isDragActive ? 'border-dashed border-2 border-primary' : ''
        }`}
      >
        <input {...getInputProps()} />
        <UploadIcon size='156' />
        <h2 className='text-3xl font-semibold mt-5 mb-2'>Arrastra y suelta tu imagen aquí</h2>
        <p className='text-gray-500 mb-9'>Imagenes JPG, PNG y GIF - max 8MB</p>
        <div className='flex items-center'>
          <span className='text-gray-500'>o</span>
          <button className='border border-gray-700 rounded-md pl-6 ml-4 tracking-wider text-sm text-gray-300 transition hover:bg-white/5'>
            Selecciona una imagen
            <span className='inline-block align-middle border-l border-gray-700 ml-6 py-3 px-3'>
              <ChevronUp />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
