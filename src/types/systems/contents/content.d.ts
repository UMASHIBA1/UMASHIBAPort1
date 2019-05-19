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
    wordOpacity: CSSProperties["opacity"];
    displayMainContent: boolean;
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
    fontVariant: MainMarkProps["fontVariant"];
}

type ContentProps = 
noCalculateContentProps&
hasCalculateContentProps;

export default ContentProps;
