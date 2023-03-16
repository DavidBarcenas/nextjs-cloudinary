import { Button } from './button';
import { GithubIcon } from './icons';

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
  return (
    <aside className='w-full h-full max-w-xs border-l border-gray-700 p-6 flex flex-col'>
      <div className='grow mb-8 overflow-y-auto'>
        <ul className='grid grid-cols-3 gap-3 text-gray-300'>
          {effectsList.map((item, i) => (
            <li
              key={item.name + i}
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
