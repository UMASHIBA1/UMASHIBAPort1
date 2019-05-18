import {
    CHANGE_BACKGROUND_SQUARE_PROPS, 
    ADD_BACKGROUND_SQUARE_PROPS,
    CHANGE_ABOUT_ME_PROPS,
    CHANGE_CREATED_PROPS,
    CHANGE_TOOLS_PROPS, 
    CHANGE_CONTACT_PROPS,
    CHANGE_ABOUT_ME_CONTENT_PROPS,
    CHANGE_CREATED_CONTENT_PROPS,
    CHANGE_TOOLS_CONTENT_PROPS,
    CHANGE_CONTACT_CONTENT_PROPS,
} from '../constant/action-types';
import { backgroundSquareProp } from '../../types/common/background-square';
import { 
    AddBackgroundSquarePropsAction,
    ChangeBackgroundSquarePropsAction,
    ChangeAboutMePropsAction,
    ChangeCreatedPropsAction,
    ChangeToolsPropsAction, 
    ChangeContactPropsAction,
    ChangeAboutMeContentPropsAction,
    ChangeCreatedContentPropsAction,
    ChangeToolsContentPropsAction,
    ChangeContactContentPropsAction} from '../../types/redux/actions';
import MainMarksProps from '../../types/common/mainmarks';
import ContentProps from '../../types/systems/contents/content';

export const ChangeBackgroundSquareProps = (payload: backgroundSquareProp[]):ChangeBackgroundSquarePropsAction => {
    return {type: CHANGE_BACKGROUND_SQUARE_PROPS,payload};
}

export const AddBackgroundSquareProps = (payload: backgroundSquareProp):AddBackgroundSquarePropsAction => {
    return {type: ADD_BACKGROUND_SQUARE_PROPS,payload};
}

export const ChangeAboutMeProps = (payload:MainMarksProps):ChangeAboutMePropsAction => {
    return {type: CHANGE_ABOUT_ME_PROPS,payload};
}

export const ChangeCreatedProps = (payload:MainMarksProps): ChangeCreatedPropsAction => {
    return {type: CHANGE_CREATED_PROPS,payload};
}

export const ChangeToolsProps = (payload:MainMarksProps): ChangeToolsPropsAction => {
    return {type: CHANGE_TOOLS_PROPS,payload};
}

export const ChangeContactProps = (payload:MainMarksProps): ChangeContactPropsAction => {
    return {type: CHANGE_CONTACT_PROPS,payload};
}

export const ChangeAboutMeContentProps = (payload: ContentProps): ChangeAboutMeContentPropsAction => {
    return {type: CHANGE_ABOUT_ME_CONTENT_PROPS,payload};
}

export const ChangeCreaetedContentProps = (payload:ContentProps):ChangeCreatedContentPropsAction => {
    return {type: CHANGE_CREATED_CONTENT_PROPS,payload};
}

export const ChangeToolsContentProps = (payload:ContentProps):ChangeToolsContentPropsAction => {
    return {type:CHANGE_TOOLS_CONTENT_PROPS,payload};
}

export const ChangeContactContentProps = (payload:ContentProps):ChangeContactContentPropsAction => {
    return {type:CHANGE_CONTACT_CONTENT_PROPS,payload};
}
