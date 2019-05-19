import { colorName } from '../../types/systems/colors/color-word-controller';
import { mapStateToPropsMainMarksType } from '../redux/map-state-to-props';
import { CSSProperties } from 'react';


export type contentType =
"AboutMe"|
"Created"|
"Tools"|
"Contact";


export interface noCalculateMainMarkProps {
    borderColor: colorName;
    word: string;
    wordColor: colorName;
    rotate: CSSProperties.rotate;
    zIndex: CSSProperties.zIndex;
    shadow: Shadow;
    display: "flex"|"hidden";
};

export interface hasCalculateMainMarksProps {
    top:number;
    left: number;
    widthHeight: number;
    secondWidthHeight: number;
    thirdWidthHeight: number;
    borderWidth: CSSProperties.borderWidth;
    fontVariant: TypographyProps.variant;
};

type MainMarkProps = noCalculateMainMarkProps & hasCalculateMainMarksProps;

export default MainMarkProps;
