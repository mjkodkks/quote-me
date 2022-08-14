import { ScriptProps } from 'next/script';
import { createContext, Dispatch, useContext, useState } from 'react';

export interface GlobalContent {
  img: string
  setImg:(c: string) => void
}
const AppContext = createContext<GlobalContent>({
  img: '',
  setImg: ()=> {}
});

export function AppWrapper({ children }: ScriptProps) {
  const [img , setImg] = useState('')

  return (
    <AppContext.Provider value={{img, setImg}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}