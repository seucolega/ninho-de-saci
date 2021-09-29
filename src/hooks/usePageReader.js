import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useReaderSelectorDataContext } from "../context/contexts";
import { getPages, PAGES_LENGTH } from "../utils/pages";

const usePageReader = () => {
  const isSinglePage = useReaderSelectorDataContext();
  const [currentIndex, setCurrentIndex] = useState(() => 0);
  const [browseDirection, setBrowseDirection] = useState(() => 0);
  
  const lastIndex = useRef(currentIndex);
  const isLastOfPair = currentIndex % 2 !== 0

  const pagesAmount = useMemo(() => isSinglePage ? 1 : 2, [isSinglePage]);

  const pages = getPages({ index: currentIndex, isSinglePage });

  const nextPages = useMemo(
    () => {
      const initialIndex = currentIndex + (browseDirection * pagesAmount);
      return getPages({ index: initialIndex, isSinglePage });
    },
    [browseDirection],
  );

  const setNextPage = useCallback(
    () => {
      console.log('currentIndex', currentIndex);
      return browseDirection < 0
        ? () => setCurrentIndex((curr) => {
            const previousIndex = curr - pagesAmount;
            return previousIndex < 0 ? 0 : previousIndex;
          })
        : () => setCurrentIndex((curr) => {
            const nextIndex = curr + pagesAmount;
            return nextIndex > PAGES_LENGTH - 1 ? 0 : nextIndex
          });
    },
    [browseDirection],
  );

  useEffect(
    () => {
      const isTogglingDoubleAtLastOfPair = !isSinglePage && isLastOfPair;
      const isLastOfPairRecorded = lastIndex.current === currentIndex + 1;
      const mustReturnToLastOfPair = isSinglePage && isLastOfPairRecorded;

      if (isTogglingDoubleAtLastOfPair) {
        setCurrentIndex((curr) => curr - 1);
      }
      
      if (mustReturnToLastOfPair) {
        setCurrentIndex(lastIndex.current);
      }
    },
    [isSinglePage],
  );

  useEffect(
    () => {
      const mustRecordLastOfPair = isSinglePage && isLastOfPair;
      const mustEraseLastOfPair = currentIndex !== lastIndex.current - 1;

      if (mustRecordLastOfPair || mustEraseLastOfPair) {
        lastIndex.current = currentIndex;
      }
    },
    [currentIndex],
  );

  return {
    pagesAmount,
    pages,
    currentIndex,
    browseDirection,
    setBrowseDirection,
    nextPages,
    setNextPage,
    isAtLastPage: currentIndex >= PAGES_LENGTH - 1,
    isAtFirstPage: currentIndex === 0,
  };
};

export default usePageReader;
