import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { sizes, positions } from '../../styled/oneOf';

import { StyledContainer, StyledContent } from './styled';

const Toast = ({
  visible, onHide, content, size, position, currentIndex, ...rest
}) => {
  let timer;

  useEffect(
    () => {
      clearTimeout(timer);
      if (visible) {
        timer = setTimeout(() => {
          onHide();
        }, 4000);
      }
      return () => clearTimeout(timer);
    },
    [visible]
  );

  if (visible) {
    return ReactDOM.createPortal(
      <StyledContainer position={position} currentIndex={currentIndex} onClick={onHide}>
        <StyledContent size={size} {...rest}>
          {content}
        </StyledContent>
      </StyledContainer>,
      document.body
    );
  }

  return null;
};

Toast.propTypes = {
  visible: PropTypes.bool,
  onHide: PropTypes.func,
  content: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  position: PropTypes.oneOf(positions),
  currentIndex: PropTypes.number
};

Toast.defaultProps = {
  visible: false,
  onHide: null,
  content: '',
  size: 'default',
  position: 'top center',
  currentIndex: 0
};

export default Toast;
