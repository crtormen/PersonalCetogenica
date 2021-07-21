import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.divheight || '25vw'};
`;

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: ${props => props.rounded ? 'auto' : '100%'};
  height: ${props => props.height };
  object-fit: cover;
  border: ${props => props.border};
  border-radius: ${props => props.rounded ? '50%' : '0'};
  box-shadow: ${props => props.shadow && '2px 2px 1rem var(--postColor)'};

`;

const LazyImage = ({ src, alt, height, rounded, border, shadow, divheight }) => {
  const refPlaceholder = React.useRef();
  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <ImageWrapper divheight={divheight}>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
          rounded={rounded}
          height={height}
          border={border}
          shadow={shadow}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default LazyImage;