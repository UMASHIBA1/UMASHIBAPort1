import { colorName } from '../colors/color-word-controller';
import MainMarkProps from '../../common/mainmarks';
import { CSSProperties } from 'react';


export interface noCalculateContentProps {
    borderColor: MainMarkProps["borderColor"];
    word: MainMarkProps["word"];
    wordColor: MainMarkProps["wordColor"];
    rotate: MainMarkProps["rotate"];
    zIndex: MainMarkProps["zIndex"];
    shadow: MainMarkProps["shadow"];
    display: MainMarkProps["display"];
}

export interface hasCalculateContentProps {
    top: MainMarkProps["top"];
    left: MainMarkProps["left"];
    borderWidth: MainMarkProps["borderWidth"];
    width: CSSProperties["width"];
    height: CSSProperties["height"];
    secondWidth: CSSProperties["width"];
    secondHeight: CSSPropertie["height"];
    thirdWidth: CSSProperties["width"];
    thirdHeight: CSSProperties["height"];
}

type ContentProps = noCalculateContentProps & hasCalculateContentProps;

export default ContentProps;