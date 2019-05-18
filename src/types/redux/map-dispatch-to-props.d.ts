import { 
    ChangeAboutMeContentPropsAction, 
    ChangeAboutMePropsAction, 
    ChangeAboutMeContentAndMainMarkAction, 
    ChangeCreatedPropsAction, 
    ChangeCreatedContentPropsAction,
    ChangeToolsContentPropsAction,
    ChangeContactPropsAction,
    ChangeContactContentPropsAction
} from "./actions";
import { 
    ChangeAboutMeContentAndMainMarkProps,
    ChangeCreaetedContentProps 
} from "../../redux/actions/action";

export type ChangeBackgroundSquarePropsActionWithDispatch = (payload: ChangeAboutMePropsAction.payload) => ChangeBackgroundSquarePropsAction;


export type AddBackgroundSquarePropsActionWithDispatch = (payload: AddBackgroundSquarePropsAction.payload) => AddBackgroundSquarePropsAction;

export type ChangeAboutMePropsActionWithDispatch = (payload: ChangeAboutMePropsAction.payload) => ChangeAboutMePropsAction;

export type ChangeCreatedPropsActionWithDispatch = (payload: ChangeCreatedPropsAction.payload) => ChangeCreatedPropsAction;

export type ChangeToolsPropsActionWithDispatch = (payload: ChangeToolsPropsAction.payload) => ChangeToolsPropsAction;

export type ChangeContactPropsActionWithDispatch = (payload: ChangeContactPropsAction.payload) => ChangeContactPropsAction;

export type ChangeMainMarkDispatch = 
ChangeAboutMePropsActionWithDispatch|
ChangeCreatedPropsActionWithDispatch|
ChangeToolsPropsActionWithDispatch  |
ChangeContactPropsActionWithDispatch;


export type ChangeAboutMeContentPropsActionWithDispatch = (payload: ChangeAboutMeContentAction.payload) => ChangeAboutMeContentPropsAction;

export type ChangeCreatedContentPropsActionWithDispatch = (payload: ChangeCreatedContentPropsAction.payload) => ChangeCreatedContentPropsAction;

export type ChangeToolsContentPropsActionWithDispatch = (payload: ChangeToolsContentPropsAction.payload) => ChangeToolsContentPropsAction;

export type ChangeContactContentPropsActionWithDispatch = (payload: ChangeContactContentPropsAction.payload) => ChangeContactPropsAction;

export type ChangeContentDispatch = 
ChangeAboutMeContentPropsActionWithDispatch|
ChangeCreatedContentPropsActionWithDispatch|
ChangeToolsContentPropsActionWithDispatch|
ChangeContactContentPropsActionWithDispatch;
