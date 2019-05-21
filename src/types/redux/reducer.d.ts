import {
    AddBackgroundSquarePropsAction,
    ChangeBackgroundSquarePropsAction,
    ChangeAboutMePropsAction,
    ChangeCreatedPropsAction,
    ChangeToolsPropsAction,
    ChangeContactPropsAction,
    ChangeCreatedContentPropsAction,
    ChangeToolsContentPropsAction,
    ChangeBlogPropsAction,
    ChangeContactContentPropsAction,
    ChangeBlogContentPropsAction,
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
    blogProps:             MainMarkProps;
    aboutMeContentProps:   ContentProps;
    createdContentProps:   ContentProps;
    toolsContentProps:     ContentProps;
    contactContentProps:   ContentProps;
    blogContentProps:      ContentProps;
}

export type rootReducerAction = 
AddBackgroundSquarePropsAction | 
ChangeBackgroundSquarePropsAction |
ChangeAboutMePropsAction|
ChangeCreatedPropsAction|
ChangeToolsPropsAction|
ChangeContactPropsAction|
ChangeBlogPropsAction|
ChangeCreatedContentPropsAction|
ChangeToolsContentPropsAction|
ChangeContactContentPropsAction|
ChangeBlogContentPropsAction;
