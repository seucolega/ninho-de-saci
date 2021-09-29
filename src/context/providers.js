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
