import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import media from "../assets/media";
import { useReaderSelectorDataContext } from "../context/contexts";

const usePageReader = () => {
  const isSinglePage = useReaderSelectorDataContext();
  const [currentIndex, setCurrentIndex] = useState(() => 0);
  const lastIndex = useRef(currentIndex);
  const isLastOfPair = currentIndex % 2 !== 0

  const pagesAmount = useMemo(
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

      return isSinglePage ? 1 : 2;
    }, [isSinglePage]
  );

  const pages = useMemo(
    () => media.pages.slice(currentIndex, currentIndex + pagesAmount),
    [pagesAmount, currentIndex],
  );

  const goToNextPage = useCallback(
    () => setCurrentIndex((curr) => {
      const nextIndex = curr + pagesAmount;
      return nextIndex > media.pages.length - 1 ? 0 : nextIndex;
    }),
    [pagesAmount],
  )

  const goToPreviousPage = useCallback(
    () => setCurrentIndex((curr) => {
      const previousIndex = curr - pagesAmount;
      return previousIndex < 0 ? 0 : previousIndex;
    }),
    [pagesAmount],
  )

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

  console.log(currentIndex);

  return {
    pagesAmount,
    pages,
    goToNextPage,
    goToPreviousPage,
    currentIndex,
    isAtLastPage: currentIndex >= media.pages.length - 1,
    isAtFirstPage: currentIndex === 0,
  };
};

export default usePageReader;
