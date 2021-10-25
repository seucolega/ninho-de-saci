import { useState, useEffect } from 'react';

const useMediaQuery = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 900px)');
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches]);

  return matches;
};

export default useMediaQuery;
