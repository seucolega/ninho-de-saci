import {
  AboutDataContext,
  AboutActionContext,
  PageSelectionDataContext,
  PageSelectionActionContext,
  ReaderSelectorDataContext,
  ReaderSelectorActionContext,
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

export const ReaderSelectorProvider = providerFactory(
  ReaderSelectorDataContext,
  ReaderSelectorActionContext,
);
