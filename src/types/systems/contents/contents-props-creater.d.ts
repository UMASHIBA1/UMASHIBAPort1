import MainMarkProps, { contentType } from "../../common/mainmarks";

export interface PropsForStartAnimation {
    contentType: contentType;
    word: MainMarkProps["word"];
    wordColor: MainMarkProps["wordColor"];
    borderColor: MainMarkProps["borderColor"];
    display: MainMarkProps["display"];
};

export interface PropsForEndAnimation {
    word: MainMarkProps["word"];
    wordColor: MainMarkProps["wordColor"];
    borderColor: MainMarkProps["borderColor"];
};

export interface PropsForBackAnimation {
    contentType: PropsForStartAnimation["contentType"],
    word: PropsForStartAnimation["word"],
    wordColor: PropsForStartAnimation["wordColor"],
    borderColor: PropsForStartAnimation["borderColor"]
};
