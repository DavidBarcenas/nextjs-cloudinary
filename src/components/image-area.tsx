import { Dropzone } from '@/components/dropzone';
import { Loader } from '@/components/loader';
import { useRequestStatusStore } from '@/stores/request-status';
import { ImagePreview } from '@/components/image-preview';

export function ImageArea() {
  const status = useRequestStatusStore((state) => state.status);

  if (status === 'loading') return <Loader />;
  if (status === 'success') return <ImagePreview />;
  return <Dropzone />;
}
