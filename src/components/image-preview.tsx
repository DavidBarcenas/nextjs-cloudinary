import { useFileStore } from '@/stores/files';

export function ImagePreview() {
  const file = useFileStore((state) => state.file);
  console.log(file);

  return file ? (
    <div className='w-full h-full p-8 opacity-0 animate-fade'>
      <img className='object-cover h-full m-auto' src={file.previewUrl} alt='preview' />
    </div>
  ) : null;
}
