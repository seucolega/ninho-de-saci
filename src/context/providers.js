import {
  AboutDataContext,
  AboutActionContext,
  PageSelectionDataContext,
  PageSelectionActionContext,
  ReaderModeDataContext,
  ReaderModeActionContext,
  ReaderProgressDataContext,
  ReaderProgressActionContext,
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
