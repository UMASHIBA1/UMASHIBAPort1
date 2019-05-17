export type ChangeBackgroundSquarePropsActionWithDispatch = (payload: ChangeAboutMePropsAction.payload) => ChangeBackgroundSquarePropsAction;

export type AddBackgroundSquarePropsActionWithDispatch = (payload: AddBackgroundSquarePropsAction.payload) => AddBackgroundSquarePropsAction;

export type ChangeAboutMePropsActionWithDispatch = (payload: ChangeAboutMePropsAction.payload) => ChangeAboutMePropsAction;

export type ChangeCreatedPropsActionWithDispatch = (payload: ChangeCreatedPropsAction.payload) => ChangeCreatedPropsAction;

export type ChangeToolsPropsActionWithDispatch = (payload: ChangeToolsPropsAction.payload) => ChangeToolsPropsAction;

export type ChangeContactPropsActionWithDispatch = (payload: ChangeContactPropsAction.payload) => ChangeContactPropsAction;

export type ChangeMainMarksDispatch = 
ChangeAboutMePropsActionWithDispatch|
ChangeCreatedPropsActionWithDispatch|
ChangeToolsPropsActionWithDispatch  |
ChangeContactPropsActionWithDispatch;
