import { rootReducerAction, reduxState } from '../../types/redux/reducer';
import { CHANGE_BACKGROUND_SQUARE_PROPS, ADD_BACKGROUND_SQUARE_PROPS, CHANGE_ABOUT_ME_PROPS } from '../constant/action-types';
import BackgroundController from '../../systems/Background/background-controller';
import AboutMePropsCreater from '../../systems/MainMarks/aboutme-props-creater';

const backgroundObj: BackgroundController = new BackgroundController();
const aboutMeObj: AboutMePropsCreater = new AboutMePropsCreater({
    word: 'AboutMe',
    borderColor: 'blue',
    wordColor: 'grey'
});

const initialState: reduxState = {
    backgroundSquareProps: backgroundObj.createBackgroundProps(),
    aboutMeProps: aboutMeObj.createProps()
    // example of backgroundSquareProps
    // [
    //     {
    //         id: 1,
    //         colorName: colorObj.randomColor(),
    //         word: 'hey',
    //         sideLength:200,
    //         zindex: 6,
    //         top: 41.42,
    //         left: 42.42,
    //     },
    //     {
    //         id:2,
    //         colorName: colorObj.randomColor(),
    //         word: 'hello',
    //         sideLength: 300,
    //         zindex: 5,
    //         top: 62.13,
    //         left: 141.42,
    //     },
    //     {
    //         id:3,
    //         colorName: colorObj.randomColor(),
    //         word: 'good bye',
    //         sideLength: 400,
    //         zindex: 4,
    //         top: 400,
    //         left: 400,
    //     }
    // ]
};

const rootReducer = (state: reduxState = initialState,action: rootReducerAction) => {
    switch(action.type){
        case CHANGE_BACKGROUND_SQUARE_PROPS:
            return Object.assign({},state,{backgroundSquareProps: action.payload});
        case ADD_BACKGROUND_SQUARE_PROPS:
            return Object.assign({},state,{backgroundSquareProps: Object.assign({},state.backgroundSquareProps,action.payload)});
        case CHANGE_ABOUT_ME_PROPS:
            return Object.assign({},state,{aboutMeProps: action.payload});
        default:
            return state;
        }
    }

export default rootReducer;
