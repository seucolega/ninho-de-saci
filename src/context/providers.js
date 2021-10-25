import {
  AboutDataContext,
  AboutActionContext,
  PageSelectionDataContext,
  PageSelectionActionContext,
  ReaderModeDataContext,
  ReaderModeActionContext,
  ReaderProgressDataContext,
  ReaderProgressActionContext,
  SoundModeDataContext,
  SoundModeActionContext,
  MenuDataContext,
  MenuActionContext,
} from './contexts';
import providerFactory from './utils/providerFactory';

export const AboutProvider = providerFactory(
  AboutDataContext,
  AboutActionContext,
);

export const PageSelectionProvider = providerFactory(
  PageSelectionDataContext,
  PageSelectionActionContext,
);

export const ReaderModeProvider = providerFactory(
  ReaderModeDataContext,
  ReaderModeActionContext,
);

export const ReaderProgressProvider = providerFactory(
  ReaderProgressDataContext,
  ReaderProgressActionContext,
);

export const SoundModeProvider = providerFactory(
  SoundModeDataContext,
  SoundModeActionContext,
);

export const MenuProvider = providerFactory(
  MenuDataContext,
  MenuActionContext,
);
