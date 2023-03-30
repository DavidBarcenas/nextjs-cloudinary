import { create } from 'zustand';
import type { ImageResponseClient } from '@/interfaces/file';

interface FileState {
  file: ImageResponseClient | null;
  fileList: string[];
  convertedFile: string | null;
  setFile: (file: ImageResponseClient) => void;
  setConvertedFile: (fileUrl: string) => void;
}

export const useFileStore = create<FileState>((set) => ({
  file: null,
  fileList: [],
  convertedFile: null,
  setConvertedFile: (fileUrl) => set({ convertedFile: fileUrl }),
  setFile: (file) => set({ file }),
}));
