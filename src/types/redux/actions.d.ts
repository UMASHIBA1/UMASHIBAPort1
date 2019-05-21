import { 
    TYPE_CHANGE_BACKGROUND_SQUARE_PROPS,
    TYPE_ADD_BACKGROUND_SQUARE_PROPS, 
    TYPE_CHANGE_ABOUT_ME_PROPS, 
    TYPE_CHANGE_CREATED_PROPS, 
    TYPE_CHANGE_TOOLS_PROPS, 
    TYPE_CHANGE_CONTACT_PROPS, 
    TYPE_CHANGE_ABOUT_ME_CONTENT_PROPS,
    TYPE_CHANGE_CREATED_CONTENT_PROPS,
    TYPE_CHANGE_TOOLS_CONTENT_PROPS,
    TYPE_CHANGE_CONTACT_CONTENT_PROPS,
    TYPE_CHANGE_BLOG_PROPS,
} from './action-types';
import { backgroundSquareProp } from '../common/background-square';
import MainMarkProps from '../common/mainmarks';
import ContentProps from '../systems/contents/content';
import { ChangeAboutMeProps, ChangeCreatedProps, ChangeToolsProps, ChangeContactProps } from '../../redux/actions/action';



export interface AddBackgroundSquarePropsAction {
    type: TYPE_ADD_BACKGROUND_SQUARE_PROPS;
    payload: backgroundSquareProp;
}

export interface ChangeBackgroundSquarePropsAction {
    type: TYPE_CHANGE_BACKGROUND_SQUARE_PROPS;
    payload: backgroundSquareProp[];
}


export interface ChangeAboutMePropsAction {
    type: TYPE_CHANGE_ABOUT_ME_PROPS;
    payload: MainMarkProps;
}

export interface ChangeCreatedPropsAction {
    type: TYPE_CHANGE_CREATED_PROPS;
    payload: MainMarkProps;
}

export interface ChangeToolsPropsAction {
    type: TYPE_CHANGE_TOOLS_PROPS;
    payload: MainMarkProps;
}

export interface ChangeContactPropsAction {
    type: TYPE_CHANGE_CONTACT_PROPS;
    payload: MainMarkProps;
}

export interface ChangeBlogPropsAction {
    type: TYPE_CHANGE_BLOG_PROPS;
    payload: MainMarkProps;
}

export type ChangeMainMarkAction = 
ChangeAboutMePropsAction | 
ChangeCreatedPropsAction |
ChangeToolsPropsAction   |
ChangeContactPropsAction |
ChangeBlogPropsAction;


export interface ChangeAboutMeContentPropsAction {
    type: TYPE_CHANGE_ABOUT_ME_CONTENT_PROPS;
    payload: ContentProps;
}

export interface ChangeCreatedContentPropsAction {
    type: TYPE_CHANGE_CREATED_CONTENT_PROPS;
    payload: ContentProps;
}

export interface ChangeToolsContentPropsAction {
    type: TYPE_CHANGE_TOOLS_CONTENT_PROPS;
    payload: ContentProps;
}

export interface ChangeContactContentPropsAction {
    type: TYPE_CHANGE_CONTACT_CONTENT_PROPS;
    payload: ContentProps;
}


export type ChangeContentAction = 
ChangeAboutMeContentPropsAction |
ChangeCreatedContentPropsAction |
ChangeToolsContentPropsAction   |
ChangeContactContentPropsAction;
