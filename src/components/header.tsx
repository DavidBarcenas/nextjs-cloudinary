import { DownloadIcon } from './icons';
import { Logo } from './logo';

export function Header() {
  return (
    <header className='flex items-center justify-between px-4 leading-[60px] border-b border-gray-700'>
      <Logo />
      <nav className='flex items-center'>
        <a href='' className='flex items-center'>
          <DownloadIcon />
          <span className='ml-2'>Descargar</span>
        </a>
      </nav>
    </header>
  );
}
