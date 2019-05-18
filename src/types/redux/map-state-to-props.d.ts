import { backgroundSquareProp } from "../common/background-square";
import MainMarkProps from "../common/mainmarks";
import ContentProps from "../systems/contents/content";

export interface mapStateToPropsBackgroundPropsType {
    backgroundProps: backgroundSquareProp[];
}

export interface mapStateToPropsMainMarksType {
    mainMarkProps: MainMarkProps;
}

export interface mapStateToPropsContentType {
    contentProps: ContentProps;
}
