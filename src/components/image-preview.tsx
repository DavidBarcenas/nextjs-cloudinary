import { useFileStore } from '@/stores/files';

export function ImagePreview() {
  const file = useFileStore((state) => state.file);

  return file ? (
    <div
      key={file.token}
      className='flex items-center justify-center w-full h-full p-8 opacity-0 animate-fade'
    >
      <img className='object-cover max-h-full m-auto' src={file.previewUrl} alt='preview' />
    </div>
  ) : null;
}
