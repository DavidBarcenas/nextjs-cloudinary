import { Button } from './button';
import { GithubIcon, RemoveBG } from './icons';
import { useFileStore } from '@/stores/files';
import { Cloudinary } from '@cloudinary/url-gen';
import { backgroundRemoval } from '@cloudinary/url-gen/actions/effect';
import { useRequestStatusStore } from '@/stores/request-status';

const cldUrlGen = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
  },
  url: {
    secure: true,
  },
});

const effectsList = [
  {
    icon: RemoveBG,
    name: 'Eliminar Fondo',
    transform: (tokenFile: string) => {
      return cldUrlGen.image(tokenFile).effect(backgroundRemoval()).toURL();
    },
  },
];

export function Sidebar() {
  const file = useFileStore((state) => state.file);
  const setFile = useFileStore((state) => state.setFile);
  const setStatus = useRequestStatusStore((state) => state.setStatus);

  const transformImage = (callback: (tokenFile: string) => string) => {
    setStatus('loading');
    if (file?.token) {
      const myImage = callback(file.token);
      loadImage(myImage);
    }
  };

  const loadImage = (url: string, retries = 5, delay = 1000) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      console.log('entra');
      setFile({
        token: file?.token || '',
        previewUrl: url,
      });
      setStatus('success');
    };
    img.onerror = () => {
      console.log('Entra al error');
      if (retries > 0) {
        setTimeout(() => loadImage(url, retries - 1), delay);
      } else {
        console.log('Termina los intentos');
      }
    };
  };

  return (
    <aside className='w-full h-full max-w-xs border-l border-gray-700 p-6 flex flex-col'>
      <div>Comparar</div>
      <div className='grow mb-8 overflow-y-auto'>
        <ul className='grid grid-cols-3 gap-3 text-gray-300'>
          {effectsList.map(({ icon: Icon, name, transform }, i) => (
            <li
              key={name + i}
              onClick={() => transformImage(transform)}
              className='text-center border border-gray-700 p-3 cursor-pointer transition hover:border-white hover:text-white'
            >
              <span className='flex justify-center mb-3'>
                <Icon />
              </span>
              <small className='block leading-tight'>{name}</small>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <Button className='flex items-center justify-center w-full'>
          <GithubIcon />
          <span className='ml-3'>David Bárcenas</span>
        </Button>
      </footer>
    </aside>
  );
}
