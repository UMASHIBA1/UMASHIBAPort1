import { colorName } from '../../types/systems/colors/color-word-controller';
import { mapStateToPropsMainMarksType } from '../redux/map-state-to-props';



export interface noCalculateMainMarkProps {
    borderColor: colorName;
    word: string;
    wordColor: colorName;
    rotate: number;
    zIndex: number;
};

export interface hasCalculateMainMarksProps {
    top:number;
    left: number;
    widthHeight: number;
    secondWidthHeight: number;
    thirdWidthHeight: number;
    borderWidth: number;
    fontVariant: TypographyProps.variant;
};

type MainMarkProps = noCalculateMainMarkProps & hasCalculateMainMarksProps;

export default MainMarkProps;
