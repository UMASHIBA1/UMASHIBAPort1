import { rootReducerAction, reduxState } from '../../types/redux/reducer';
import { CHANGE_BACKGROUND_SQUARE_PROPS, ADD_BACKGROUND_SQUARE_PROPS } from '../constant/action-types';
import ColorController from '../../systems/Colors/color-obj-controller';

const colorObj = new ColorController();

const initialState: reduxState = {
    backgroundSquareProps: [
        {
            id: 1,
            colorName: colorObj.randomColor(),
            word: 'hey',
            sideLength:200,
            zindex: 6,
            top: 41.42,
            left: 42.42,
        },
        {
            id:2,
            colorName: colorObj.randomColor(),
            word: 'hello',
            sideLength: 300,
            zindex: 5,
            top: 62.13,
            left: 141.42,
        },
        {
            id:3,
            colorName: colorObj.randomColor(),
            word: 'good bye',
            sideLength: 400,
            zindex: 4,
            top: 400,
            left: 400,
        }
        // {
            // id
            // color,
            // word,
            // sideLength,
            // zindex,
            // top,
            // left,
        // }
    ]
};

const rootReducer = (state: reduxState = initialState,action: rootReducerAction) => {
    switch(action.type){
        case CHANGE_BACKGROUND_SQUARE_PROPS:
            return Object.assign({},state,{backgroundSquareProps: action.payload});
        case ADD_BACKGROUND_SQUARE_PROPS:
            return Object.assign({},state,{backgroundSquareProps: Object.assign({},state.backgroundSquareProps,action.payload)});
        default:
            return state;
        }
    }

export default rootReducer;
