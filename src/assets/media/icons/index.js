import SingleActiveIcon from './single-page-active.svg';
import SingleInactiveIcon from './single-page-inactive.svg';
import DoubleActiveIcon from './double-page-active.svg';
import DoubleInactiveIcon from './double-page-inactive.svg';
import CloseIcon from './menu-hamburguer-close.svg';
import MenuIcon from './menu-hamburguer.svg';

const icons = {
  singlePage: {
    active: SingleActiveIcon,
    inactive: SingleInactiveIcon,
  },
  doublePage: {
    active: DoubleActiveIcon,
    inactive: DoubleInactiveIcon,
  },
  menu: {
    open: MenuIcon,
    close: CloseIcon,
  },
};

export default icons;
