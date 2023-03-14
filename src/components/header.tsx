import { Button } from './button';
import { DownloadIcon } from './icons';
import { Logo } from './logo';

export function Header() {
  return (
    <header className='flex items-center justify-between py-4 px-5 leading-[60px] border-b border-gray-700'>
      <Logo />
      <nav className='flex items-center'>
        <Button className='flex items-center'>
          <DownloadIcon />
          <span className='ml-2'>Descargar</span>
        </Button>
      </nav>
    </header>
  );
}
