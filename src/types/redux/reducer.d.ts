import {
    AddBackgroundSquarePropsAction,
    ChangeBackgroundSquarePropsAction
} from './actions'
import { backgroundSquareProp } from '../components/background/background-square'; 

export interface reduxState {
    backgroundSquareProps: backgroundSquareProp[];
}

export type rootReducerAction = AddBackgroundSquarePropsAction | 
ChangeBackgroundSquarePropsAction;
