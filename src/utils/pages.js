import media from "../assets/media";

export const PAGES_LENGTH = media.pages.length;

export const getPages = ({ index, isSinglePage }) => {
  const pagesAmount = isSinglePage ? 1 : 2;
  return media.pages.slice(index, index + pagesAmount);
};
