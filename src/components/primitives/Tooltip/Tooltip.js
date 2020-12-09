import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  StyledContainer, StyledContent, StyledTip, StyledTipContent
} from './styled';

import useWindowSize from '../../../customHooks/useWindowsize';

import { positions } from '../../../styled/oneOf';

const Portal = ({ children }) => ReactDOM.createPortal(children, document.body);

const Tooltip = ({
  children, content, position, ...rest
}) => {
  const containerRef = useRef();
  const tooltipRef = useRef();
  const [dimensions, setDimensions] = useState();
  const [dimensionsTip, setDimensionsTip] = useState({ width: 200, height: 50 });
  const [visible, setVisible] = useState(false);
  const [fadeType, setFadeType] = useState('out');
  const [currentPosition, setCurrentPosition] = useState(position);
  const { width } = useWindowSize();

  // handlers
  const handleShowTip = () => {
    const currentDimensions = containerRef.current.getBoundingClientRect();
    setDimensions(currentDimensions);
    setVisible(true);

    if (width - currentDimensions.left < 200) {setCurrentPosition('top right');}

    setTimeout(() => setFadeType('in'), 40);
  };
  const handleHideTip = () => {
    setFadeType('out');
    setTimeout(() => setVisible(false), 100);
  };

  // effects
  useEffect(
    () => {
      if (tooltipRef.current) {
        setDimensionsTip({ 
          height: tooltipRef.current.clientHeight, width: tooltipRef.current.clientWidth 
        });}
    },
    [tooltipRef.current]
  );

  return (
    <StyledContainer 
      ref={containerRef} 
      onMouseEnter={handleShowTip} 
      onMouseLeave={handleHideTip} 
      {...rest}>
      <StyledContent className="tooltipTrigger">{children}</StyledContent>
      {visible && (
        <Portal>
          <StyledTip
            ref={tooltipRef}
            className="tooltip"
            position={currentPosition}
            fadeType={fadeType}
            dimensions={dimensions}
            dimensionsTip={dimensionsTip}
          >
            <StyledTipContent 
              className="content" 
              position={currentPosition} dimensionsTip={dimensionsTip}>
              {Array.isArray(children) ? content.join(' ') : content}
            </StyledTipContent>
          </StyledTip>
        </Portal>
      )}
    </StyledContainer>
  );
};

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  position: PropTypes.oneOf(positions)
};

Tooltip.defaultProps = {
  content: '',
  position: 'top left'
};

export default Tooltip;
