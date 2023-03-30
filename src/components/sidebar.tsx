import { Button } from './button';
import { GithubIcon } from './icons';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { useFileStore } from '@/stores/files';
import { Cloudinary } from '@cloudinary/url-gen';

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
    icon: GithubIcon,
    name: 'Eliminar Fondo',
  },
  {
    icon: GithubIcon,
    name: 'Agregar Fondo',
  },
  {
    icon: GithubIcon,
    name: 'Blanco y negro',
  },
  {
    icon: GithubIcon,
    name: 'Eliminar Fondo',
  },
  {
    icon: GithubIcon,
    name: 'Agregar Fondo',
  },
  {
    icon: GithubIcon,
    name: 'Blanco y negro',
  },
  {
    icon: GithubIcon,
    name: 'Eliminar Fondo',
  },
  {
    icon: GithubIcon,
    name: 'Agregar Fondo',
  },
  {
    icon: GithubIcon,
    name: 'Blanco y negro',
  },
  {
    icon: GithubIcon,
    name: 'Eliminar Fondo',
  },
  {
    icon: GithubIcon,
    name: 'Agregar Fondo',
  },
  {
    icon: GithubIcon,
    name: 'Blanco y negro',
  },
];

export function Sidebar() {
  const file = useFileStore((state) => state.file);
  const setFile = useFileStore((state) => state.setFile);
  const transformImage = () => {
    if (file?.token) {
      const myImage = cldUrlGen.image(file.token).resize(fill().width(500).height(300));
      setFile({
        token: file.token,
        previewUrl: myImage.toURL(),
      });
    }
  };

  return (
    <aside className='w-full h-full max-w-xs border-l border-gray-700 p-6 flex flex-col'>
      <div className='grow mb-8 overflow-y-auto'>
        <ul className='grid grid-cols-3 gap-3 text-gray-300'>
          {effectsList.map((item, i) => (
            <li
              key={item.name + i}
              onClick={transformImage}
              className='text-center border border-gray-700 p-3 cursor-pointer transition hover:border-white hover:text-white'
            >
              <span className='flex justify-center mb-3'>{item.icon()}</span>
              <small className='block leading-tight'>{item.name}</small>
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
