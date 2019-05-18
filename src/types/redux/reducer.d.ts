import {
    AddBackgroundSquarePropsAction,
    ChangeBackgroundSquarePropsAction,
    ChangeAboutMePropsAction,
    ChangeCreatedPropsAction,
    ChangeToolsPropsAction,
    ChangeContactPropsAction,
    ChangeCreatedContentPropsAction,
    ChangeToolsContentPropsAction,
} from './actions'
import { backgroundSquareProp } from '../common/background-square'; 
import MainMarkProps from '../common/mainmarks';
import ContentProps from '../systems/contents/content';

export interface reduxState {
    backgroundSquareProps: backgroundSquareProp[];
    aboutMeProps:          MainMarkProps;
    createdProps:          MainMarkProps;
    toolsProps:            MainMarkProps;
    contactProps:          MainMarkProps;
    aboutMeContentProps:   ContentProps;
    createdContentProps:   ContentProps;
    toolsContentProps:     ContentProps;
    contactContentProps:   ContentProps;
}

export type rootReducerAction = 
AddBackgroundSquarePropsAction | 
ChangeBackgroundSquarePropsAction |
ChangeAboutMePropsAction|
ChangeCreatedPropsAction|
ChangeToolsPropsAction|
ChangeContactPropsAction|
ChangeCreatedContentPropsAction|
ChangeToolsContentPropsAction|
ChangeContactPropsAction;
