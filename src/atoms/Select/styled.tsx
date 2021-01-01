import { styled } from 'styled/themes';

interface Props {
    width: any;
}

const Selector = styled.select<Props>`
    height: 48px;
    font-size: 13px;
    width: ${(props) => props.width};
    color: ${(props) => props.theme.colors.gray400};
    background-color: ${(props) => props.theme.themeColors.primaryBg};
    padding-left: 10px;
    border: none;
    transition: all 0.5s ease-in-out;
    border-bottom: 1px solid ${(props) => props.theme.themeColors.primaryTxt};
    border-radius: 0.5rem;
`;
const Option = styled.option`
    padding:0 2px 1px;
    background-color: #fff;
    color: #000;
`;
export { Selector, Option };
