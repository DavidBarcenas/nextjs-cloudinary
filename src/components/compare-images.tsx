import { useEffect } from 'react';

export function CompareImages() {
  useEffect(() => {
    import('two-up-element');
  }, []);

  return (
    <div className='flex items-center justify-center w-full h-full p-8 opacity-0 animate-fade'>
      <two-up>
        <img
          src='https://res.cloudinary.com/dikn1oezo/image/upload/v1680575005/885efe74-ec44-4b40-b43a-7e2250832ad2.jpg'
          alt=''
        />
        <img
          src='https://res.cloudinary.com/dikn1oezo/image/upload/e_background_removal/885efe74-ec44-4b40-b43a-7e2250832ad2?_a=ATFGlAA0'
          alt=''
        />
      </two-up>
    </div>
  );
}
