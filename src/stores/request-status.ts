import { create } from 'zustand';

type StatusType = 'idle' | 'loading' | 'success' | 'error';

interface RequestStatus {
  status: StatusType;
  setStatus: (status: StatusType) => void;
}

export const useRequestStatusStore = create<RequestStatus>((set) => ({
  status: 'idle',
  setStatus: (status) => set({ status }),
}));
