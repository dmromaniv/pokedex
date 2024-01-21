import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { SCREEN_RESOLUTION } from '../constants/screen';

const useScreenWidth = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < SCREEN_RESOLUTION.tablet);
      setIsTablet(
        window.innerWidth >= SCREEN_RESOLUTION.tablet &&
        window.innerWidth < SCREEN_RESOLUTION.desktop
      );
      setIsDesktop(window.innerWidth > SCREEN_RESOLUTION.desktop);
    };
    updateSize();
    window.addEventListener('resize', debounce(updateSize, 250));
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return { isMobile, isTablet, isDesktop };
};
export default useScreenWidth;
