import { createContext, useContext } from 'react';

export const AboutDataContext = createContext();
export const AboutActionContext = createContext();
export const PageSelectionDataContext = createContext();
export const PageSelectionActionContext = createContext();
export const ReaderSelectorDataContext = createContext();
export const ReaderSelectorActionContext = createContext();

export const useAboutDataContext = () => useContext(AboutDataContext);
export const useAboutActionContext = () => useContext(AboutActionContext);
export const usePageSelectionDataContext = () => useContext(PageSelectionDataContext);
export const usePageSelectionActionContext = () => useContext(PageSelectionActionContext);
export const useReaderSelectorDataContext = () => useContext(ReaderSelectorDataContext);
export const useReaderSelectorActionContext = () => useContext(ReaderSelectorActionContext);
