import { createContext, useContext } from 'react';

export const AboutDataContext = createContext();
export const AboutActionContext = createContext();
export const PageSelectionDataContext = createContext();
export const PageSelectionActionContext = createContext();
export const ReaderModeDataContext = createContext();
export const ReaderModeActionContext = createContext();
export const ReaderProgressDataContext = createContext();
export const ReaderProgressActionContext = createContext();
export const SoundModeDataContext = createContext();
export const SoundModeActionContext = createContext();

export const useAboutDataContext = () => useContext(AboutDataContext);
export const useAboutActionContext = () => useContext(AboutActionContext);
export const usePageSelectionDataContext = () => useContext(PageSelectionDataContext);
export const usePageSelectionActionContext = () => useContext(PageSelectionActionContext);
export const useReaderModeDataContext = () => useContext(ReaderModeDataContext);
export const useReaderModeActionContext = () => useContext(ReaderModeActionContext);
export const useReaderProgressDataContext = () => useContext(ReaderProgressDataContext);
export const useReaderProgressActionContext = () => useContext(ReaderProgressActionContext);
export const useSoundModeDataContext = () => useContext(SoundModeDataContext);
export const useSoundModeActionContext = () => useContext(SoundModeActionContext);
