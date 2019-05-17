import { rootReducerAction, reduxState } from '../../types/redux/reducer';
import { CHANGE_BACKGROUND_SQUARE_PROPS,
    ADD_BACKGROUND_SQUARE_PROPS,
    CHANGE_ABOUT_ME_PROPS,
    CHANGE_CREATED_PROPS,
    CHANGE_TOOLS_PROPS,
    CHANGE_CONTACT_PROPS
} from '../constant/action-types';
import BackgroundController from '../../systems/Background/background-controller';
import AboutMePropsCreater from '../../systems/MainMarks/aboutme-props-creater';
import CreatedPropsCreater from '../../systems/MainMarks/created-props-creater';
import ToolsPropsCreater from '../../systems/MainMarks/tools-props-creater';
import ContactPropsCreater from '../../systems/MainMarks/contact-props-creater';

const defaultRotate = 45;
const defaultZIndex = 100;
const defaultWordColor = 'grey'

const backgroundObj: BackgroundController = new BackgroundController();
const aboutMeObj: AboutMePropsCreater = new AboutMePropsCreater({
    word: 'AboutMe',
    borderColor: 'blue',
    wordColor: defaultWordColor,
    rotate: defaultRotate,
    zIndex: defaultZIndex
});
const createdObj: CreatedPropsCreater = new CreatedPropsCreater({
    word: 'Created',
    borderColor: 'red',
    wordColor: defaultWordColor,
    rotate: defaultRotate,
    zIndex: defaultZIndex
});
const toolsObj: ToolsPropsCreater = new ToolsPropsCreater({
    word: 'Tools',
    borderColor: 'green',
    wordColor: defaultWordColor,
    rotate: defaultRotate,
    zIndex: defaultZIndex
});
const contactObj: ContactPropsCreater = new ContactPropsCreater({
    word: 'Contact',
    borderColor: 'purple',
    wordColor: defaultWordColor,
    rotate: defaultRotate,
    zIndex: defaultZIndex
});
const backgroundSquareProps = backgroundObj.createBackgroundProps();
const aboutMeProps = aboutMeObj.createProps();
const createdProps = createdObj.createProps();
const toolsProps = toolsObj.createProps();
const contactProps = contactObj.createProps();

const initialState: reduxState = {
    backgroundSquareProps,
    aboutMeProps,
    createdProps,
    toolsProps,
    contactProps
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
        case CHANGE_CREATED_PROPS:
            return Object.assign({},state,{createdProps: action.payload});
        case CHANGE_TOOLS_PROPS:
            return Object.assign({},state,{toolsProps: action.payload});
        case CHANGE_CONTACT_PROPS:
            return Object.assign({},state,{contactProps: action.payload});
        default:
            return state;
        }
    }

export default rootReducer;
