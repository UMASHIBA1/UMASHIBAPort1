import MainMarkProps from '../../common/mainmarks';
import AboutMePropsCreater from '../../../systems/MainMarks/aboutme-props-creater';
import ContactPropsCreater from '../../../systems/MainMarks/contact-props-creater';
import CreatedPropsCreater from '../../../systems/MainMarks/created-props-creater';
import ToolsPropsCreater from '../../../systems/MainMarks/tools-props-creater';
import BlogPropsCreater from '../../../systems/MainMarks/blog-props-creater';

export interface allCommonPropTypes {
    widthHeight: MainMarkProps.widthHeight;
    secondWidthHeight: MainMarkProps.secondWidthHeight;
    thirdWidthHeight: MainMarkProps.thirdWidthHeight;
    borderWidth: MainMarkProps.borderWidth;
    fontVariant: MainMarkProps.fontVariant;
}

export interface topLeft{
    top: MainMarkProps.top;
    left: MainMarkProps.left;
}

export type MainMarkPropsCreater = 
AboutMePropsCreater |
CreatedPropsCreater |
ToolsPropsCreater |
ContactPropsCreater|
BlogPropsCreater;
