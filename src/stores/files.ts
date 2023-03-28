import { create } from 'zustand';
import type { ImageResponseClient } from '@/interfaces/file';

interface FileState {
  file: ImageResponseClient | null;
  setFile: (file: ImageResponseClient) => void;
}

export const useFileStore = create<FileState>((set) => ({
  file: null,
  setFile: (file) => set({ file }),
}));
