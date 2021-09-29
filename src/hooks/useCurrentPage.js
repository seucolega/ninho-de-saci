import { useCallback, useEffect, useRef, useState } from "react";
import { useReaderModeDataContext, useReaderProgressActionContext } from "../context/contexts";
import { PAGES_LENGTH } from "../utils/pages";

const useCurrentPage = (browseDirection) => {
  const [isSinglePage, pagesAmount] = useReaderModeDataContext();
  const [currentIndex, setCurrentIndex] = useState(() => 0);
  const lastIndex = useRef(currentIndex);
  const isLastOfPair = currentIndex % 2 !== 0
  const setReaderProgress = useReaderProgressActionContext();

  const setNextIndex = useCallback(
    () => {
      setCurrentIndex((curr) => {
        const nextIndex = curr + pagesAmount * browseDirection;
        const shouldGoFoward = browseDirection > 0;
        if (shouldGoFoward) {
          return nextIndex > PAGES_LENGTH - 1 ? 0 : nextIndex;
        }
        return nextIndex < 0 ? 0 : nextIndex;
      });
    },
    [browseDirection, pagesAmount],
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
      setReaderProgress([currentIndex === 0, currentIndex >= PAGES_LENGTH - 1]);

      const mustRecordLastOfPair = isSinglePage && isLastOfPair;
      const mustEraseLastOfPair = currentIndex !== lastIndex.current - 1;

      if (mustRecordLastOfPair || mustEraseLastOfPair) {
        lastIndex.current = currentIndex;
      }
    },
    [currentIndex],
  );

  return [currentIndex, setNextIndex];
};

export default useCurrentPage;
