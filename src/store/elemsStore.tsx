import { create } from 'zustand';

interface ElemsStoreProps {
  elems: string[];
  setElems: (elem: string) => void;
  clearElems: () => void;
}

const elemsStore = create<ElemsStoreProps>((set) => ({
  elems: [''],
  setElems: (elem : any) => set((state: any) => ({ elems: [...state.elems, elem] })),
  clearElems: () => set({ elems: [] })
}));

export default elemsStore;