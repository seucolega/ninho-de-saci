import { useCallback, useEffect, useState } from "react";
import { useReaderSelectorDataContext } from "../context/contexts";

const useAnimation = () => {
  const [animationElements, setAnimationElements] = useState(() => []);
  const isSinglePage = useReaderSelectorDataContext();

  const addAnimationElement =  useCallback((element) => {
    setAnimationElements((state) => {
      const stateSources = state.map((item) => item.src);
      const elementInState = stateSources.includes(element.src)
      return elementInState ? state : [...state, element];
    });
  }, []);

  const clearAnimationElements =  useCallback(() => {
    setAnimationElements([]);
  }, []);
  
  useEffect(() => { clearAnimationElements(); }, [isSinglePage]);

  return { addAnimationElement, animationElements, clearAnimationElements };
};

export default useAnimation;
