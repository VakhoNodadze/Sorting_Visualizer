import { css } from 'styled-components';
import { styled, fontSizes, sizes, borderRadius } from 'styled/themes';

interface Props {
    size: keyof typeof sizes;
    fontSize: keyof typeof fontSizes;
    borderRadius: keyof typeof borderRadius;
}

const StyledContainer = styled.button<Props>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes[props.fontSize]};
  height: ${(props) => props.theme.sizes[props.size]};
  border-radius: ${(props) => props.theme.borderRadius[props.borderRadius]};
  background-color: ${(props) => props.theme.themeColors.btnBg};
  color: ${(props) => props.theme.colors.white};
  padding: 0 1rem;
  border: 0;
  transform: scale(1);
  cursor: pointer;
  opacity: 1;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity
      150ms cubic-bezier(0.4, 0, 0.2, 1), background-color  500ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 0;
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
  &:active,
  &:focus {
    outline: 0;
  }
`;

export { StyledContainer };
