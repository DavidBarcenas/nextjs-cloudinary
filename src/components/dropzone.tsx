import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ChevronUp, UploadIcon } from './icons';

export function Dropzone() {
  const [file, setFile] = useState<{ publicId: string; secureUrl: string } | null>(null);
  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const uploadImage = await fetch('/api/upload-file', {
      method: 'POST',
      body: formData,
    });
    const response = await uploadImage.json();
    setFile(response.data);
    console.log(response);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // setFile(
    //   acceptedFiles.map((file) =>
    //     Object.assign(file, {
    //       preview: URL.createObjectURL(file),
    //     }),
    //   )[0],
    // );
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
    <div className='flex items-center justify-center grow h-full'>
      <div className={`w-full h-full p-8 ${file ? 'opacity-0 animate-fade' : ''}`}>
        {file ? (
          <img
            className='object-cover h-full m-auto'
            src={file.secureUrl}
            alt='preview'
            onLoad={() => {
              URL.revokeObjectURL(file.secureUrl);
            }}
          />
        ) : (
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
        )}
      </div>
    </div>
  );
}
