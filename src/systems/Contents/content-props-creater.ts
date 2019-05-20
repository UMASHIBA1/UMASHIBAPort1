import AboutMePropsCreater from "../MainMarks/aboutme-props-creater";
import ContentProps, { noCalculateContentProps } from "../../types/systems/contents/content";
import { firstBorderWidth } from "../../settings/mainmarks/mainmarks";
import { PropsForStartAnimation, PropsForEndAnimation, PropsForBackAnimation } from "../../types/systems/contents/contents-props-creater";
import CreatedPropsCreater from "../MainMarks/created-props-creater";
import ToolsPropsCreater from "../MainMarks/tools-props-creater";
import ContactPropsCreater from "../MainMarks/contact-props-creater";
import MainMarkProps from "../../types/common/mainmarks";


export default class ContentPropsCreater {

    private _judgeContentType(type: PropsForStartAnimation["contentType"],props:noCalculateContentProps): MainMarkProps{
        if(type==="AboutMe"){
            return new AboutMePropsCreater(props).createProps();
        }else if(type==="Created"){
            return new CreatedPropsCreater(props).createProps();
        }else if(type==="Tools"){
            return new ToolsPropsCreater(props).createProps();
        }else{
            return new ContactPropsCreater(props).createProps();
        }
    }


    createStartAnimationProps(props: PropsForStartAnimation):ContentProps{
        const {
            borderColor,
            word,
            wordColor,
            display
        } = props;
        const wordOpacity:number = 1.0;
        const tmpContentName:noCalculateContentProps = {
            borderColor,
            word,
            wordColor,
            display,
            rotate: 45,
            zIndex: 0,
            shadow: 0,
            wordOpacity,
            displayMainContent: false
        }
        const {
            top,
            left,
            widthHeight,
            secondWidthHeight,
            thirdWidthHeight,
            borderWidth,
            fontVariant
        } = this._judgeContentType(props.contentType,tmpContentName);
        return {
            borderColor,
            word,
            wordColor,
            rotate: 45,
            zIndex: 200,
            shadow: 24,
            display,
            wordOpacity,
            displayMainContent: false,
            top,
            left,
            borderWidth,
            fontVariant,
            width: widthHeight,
            height: widthHeight,
            secondWidth: secondWidthHeight,
            secondHeight: secondWidthHeight,
            thirdWidth: thirdWidthHeight,
            thirdHeight: thirdWidthHeight
        }
    }


    createEndContentProps(props:PropsForEndAnimation):ContentProps{
        const display:MainMarkProps["display"] = "flex"
        return Object.assign(
            props,{
                rotate: 0,
                zIndex: 200,
                shadow: 24,
                top: 0,
                left: 0,
                display,
                wordOpacity: 0.0,
                displayMainContent: false,
                borderWidth: firstBorderWidth,
                width: "100%",
                height: "100%",
                secondWidth: "calc(100% - 10px)",
                secondHeight: "calc(100% - 10px)",
                thirdWidth: "calc(100% - 10px)",
                thirdHeight: "calc(100% - 10px)",
                fontVariant: "h5"
            });
    }

    createBackStartAnimationProps(props:PropsForBackAnimation){
        const {
            contentType,
            borderColor,
            word,
            wordColor,
        } = props;
        const tmpContentName:noCalculateContentProps = {
            borderColor,
            word,
            wordColor,
            display: "flex",
            rotate: 0,
            zIndex: 0,
            shadow: 0,
            wordOpacity: 0,
            displayMainContent: false
        }
        const {
            top,
            left,
            widthHeight,
            secondWidthHeight,
            thirdWidthHeight,
        } = this._judgeContentType(contentType,tmpContentName);
        const display:MainMarkProps["display"] = "flex";
        return {
            borderColor,
            word,
            wordColor,
            rotate: 0,
            zIndex: 200,
            shadow: 24,
            display,
            wordOpacity: 0,
            displayMainContent: false,
            top,
            left,
            borderWidth: firstBorderWidth,
            fontVariant: "h5",
            width: widthHeight,
            height: widthHeight,
            secondWidth: secondWidthHeight,
            secondHeight: secondWidthHeight,
            thirdWidth: thirdWidthHeight,
            thirdHeight: thirdWidthHeight
        }
    }

    createBackEndAnimationProps(props:PropsForBackAnimation){
        const {
            contentType,
            borderColor,
            word,
            wordColor,
        } = props;
        const tmpContentName:noCalculateContentProps = {
            borderColor,
            word,
            wordColor,
            display: "flex",
            rotate: 0,
            zIndex: 0,
            shadow: 0,
            wordOpacity: 0,
            displayMainContent: false
        }
        const {
            top,
            left,
            widthHeight,
            secondWidthHeight,
            thirdWidthHeight,
            borderWidth,
            fontVariant
        } = this._judgeContentType(contentType,tmpContentName);

        return {
            borderColor,
            word,
            wordColor,
            rotate: 45,
            zIndex: 200,
            shadow: 24,
            display: "flex",
            wordOpacity: 1,
            displayMainContent: false,
            top,
            left,
            borderWidth,
            fontVariant,
            width: widthHeight,
            height: widthHeight,
            secondWidth: secondWidthHeight,
            secondHeight: secondWidthHeight,
            thirdWidth: thirdWidthHeight,
            thirdHeight: thirdWidthHeight
        }
    }

}
