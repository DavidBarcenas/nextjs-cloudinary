import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ChevronDown, UploadIcon } from './icons';

export function Dropzone() {
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

  return (
    <div className='flex items-center justify-center grow h-full'>
      <div className='w-full h-full p-8 '>
        {files[0] ? (
          <img
            className='object-cover h-full m-auto'
            src={files[0]?.preview}
            alt='previes'
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(files[0].preview);
            }}
          />
        ) : (
          <div
            {...getRootProps()}
            className={`w-full h-full flex flex-col items-center justify-center ${
              isFileDialogActive ? 'border-dashed border-2 border-gray-700' : ''
            }`}
          >
            <input {...getInputProps()} />
            <UploadIcon size='156' />
            <h2 className='text-3xl font-semibold mt-5 mb-2'>Arrastra y suelta tu foto aquí</h2>
            <p className='text-gray-500 mb-9'>Imagenes JPG, PNG o GIF - max 8MB</p>
            <div className='flex items-center mb-14'>
              <span className='text-gray-500'>o</span>
              <button className='border border-gray-700 rounded-tl-md rounded-bl-md py-2 px-6 ml-4 tracking-wider text-sm text-gray-300'>
                Presiona para subir una foto
              </button>
              <span className='border border-gray-700 rounded-r-md rounded-br-md px-3 flex items-center h-full border-l-0 text-gray-300 cursor-pointer'>
                <ChevronDown />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
