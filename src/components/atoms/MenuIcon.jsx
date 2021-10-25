import React from 'react';
import styled from 'styled-components';
import media from '../../assets/media';
import { useMenuActionContext, useMenuDataContext } from '../../context/contexts';

const Image = styled.img``;

const MenuIcon = ({ className }) => {
  const showMenu = useMenuDataContext();
  const toggleShowMenu = useMenuActionContext();
  const img = showMenu ? media.icons.menu.close : media.icons.menu.open;

  return <Image className={ className } src={ img } onClick={ toggleShowMenu } />;
};

export default styled(MenuIcon)`
  display: none;

  @media (max-width: 900px) {
    display: block;
    height: 40px;
    position: absolute !important;
    right: 3%;
    bottom: 3%;
    width: 40px;
    z-index: 99;
  }
`;
