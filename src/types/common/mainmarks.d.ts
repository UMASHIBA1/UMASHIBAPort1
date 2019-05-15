import { colorName } from '../../types/systems/colors/color-word-controller';
import { TypographyProps } from '@material-ui/core/Typography';



export interface noCalculateMainMarkProps {
    borderColor: colorName;
    word: string;
    wordColor: colorName;
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

// under here is for mapStateToProps
export interface mapStateToPropsTypesForMainMarks {
    mainMarkProps: MainMarksProps
}

export type MainMarkMetaType = WithStyles<typeof mainMarkStyles> & mapStateToPropsTypesForMainMarks;


