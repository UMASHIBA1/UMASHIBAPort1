import MainMarkProps, { contentType } from "../../common/mainmarks";

interface ContentCommonPropTypes {
    contentType: contentType
    word: MainMarkProps["word"];
    wordColor: MainMarkProps["wordColor"];
    borderColor: MainMarkProps["borderColor"];
    display: MainMarkProps["display"];
}
