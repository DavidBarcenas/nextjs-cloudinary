interface Props {
  imageUrl: string;
}

export function ImagePreview({ imageUrl }: Props) {
  return imageUrl ? (
    <div className='w-full h-full p-8 opacity-0 animate-fade'>
      <img className='object-cover h-full m-auto' src={imageUrl} alt='preview' />
    </div>
  ) : null;
}
