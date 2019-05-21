import { 
    ChangeAboutMeContentPropsAction, 
    ChangeAboutMePropsAction, 
    ChangeAboutMeContentAndMainMarkAction, 
    ChangeCreatedPropsAction, 
    ChangeCreatedContentPropsAction,
    ChangeToolsContentPropsAction,
    ChangeContactPropsAction,
    ChangeContactContentPropsAction,
    ChangeBackgroundSquarePropsAction,
    ChangeBlogPropsAction,
    ChangeBlogContentPropsAction
} from "./actions";
import { 
    ChangeAboutMeContentAndMainMarkProps,
    ChangeCreaetedContentProps 
} from "../../redux/actions/action";
import { Dispatch } from "redux";

export type ChangeBackgroundSquarePropsActionWithDispatch = (payload: ChangeBackgroundSquarePropsAction.payload) => ChangeBackgroundSquarePropsAction;

export type AddBackgroundSquarePropsActionWithDispatch = (payload: AddBackgroundSquarePropsAction.payload) => AddBackgroundSquarePropsAction;

export type ChangeAboutMePropsActionWithDispatch = (payload: ChangeAboutMePropsAction.payload) => ChangeAboutMePropsAction;

export type ChangeCreatedPropsActionWithDispatch = (payload: ChangeCreatedPropsAction.payload) => ChangeCreatedPropsAction;

export type ChangeToolsPropsActionWithDispatch = (payload: ChangeToolsPropsAction.payload) => ChangeToolsPropsAction;

export type ChangeContactPropsActionWithDispatch = (payload: ChangeContactPropsAction.payload) => ChangeContactPropsAction;

export type ChangeBlogPropsActionWithDispatch = (payload:ChangeBlogPropsAction.payload) => ChangeBlogPropsActionWith;

export type ChangeMainMarkDispatch = 
ChangeAboutMePropsActionWithDispatch|
ChangeCreatedPropsActionWithDispatch|
ChangeToolsPropsActionWithDispatch  |
ChangeContactPropsActionWithDispatch|
ChangeBlogPropsActionWithDispatch;


export type ChangeAboutMeContentPropsActionWithDispatch = (payload: ChangeAboutMeContentAction.payload) => ChangeAboutMeContentPropsAction;

export type ChangeCreatedContentPropsActionWithDispatch = (payload: ChangeCreatedContentPropsAction.payload) => ChangeCreatedContentPropsAction;

export type ChangeToolsContentPropsActionWithDispatch = (payload: ChangeToolsContentPropsAction.payload) => ChangeToolsContentPropsAction;

export type ChangeContactContentPropsActionWithDispatch = (payload: ChangeContactContentPropsAction.payload) => ChangeContactPropsAction;

export type ChangeBlogContentPropsActionWithDispatch = (payload: ChangeBlogContentPropsAction.payload) => ChangeBlogContentPropsAction;

export type ChangeContentDispatch = 
ChangeAboutMeContentPropsActionWithDispatch|
ChangeCreatedContentPropsActionWithDispatch|
ChangeToolsContentPropsActionWithDispatch|
ChangeContactContentPropsActionWithDispatch|
ChangeBlogContentPropsActionWithDispatch;
