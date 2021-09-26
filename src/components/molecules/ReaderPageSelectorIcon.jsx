import React from 'react';
import styled from 'styled-components';
import { Image } from '../atoms';

const ReaderPageSelectorIcon = ({ className, active, iconObject, onClick }) => {
  const iconKey = active ? 'active' : 'inactive';
  
  return (
    <Image
      className={ className }
      src={ iconObject[iconKey] }
      alt=""
      onClick={ onClick } 
    />
  );
};

export default styled(ReaderPageSelectorIcon)``;
