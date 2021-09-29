import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from '.';
import { useReaderProgressDataContext } from '../../context/contexts';

const PageNavButton = ({ className, onClick, previous }) => {
  const [isAtFirstPage, isAtLastPage] = useReaderProgressDataContext();
  const content = (previous && '<') || (isAtLastPage ? '↻': '>');

  if (previous && isAtFirstPage) {
    return null;
  }

  return (
    <Button className={ className } onClick={ onClick }>
      { content }
    </Button>
  );
};

export default styled(PageNavButton)`
  ${props => props.marginRight && css`margin-right: 1%;`}
`;
