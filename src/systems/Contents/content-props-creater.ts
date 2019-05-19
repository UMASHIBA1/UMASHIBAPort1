import AboutMePropsCreater from "../MainMarks/aboutme-props-creater";
import ContentProps, { noCalculateContentProps } from "../../types/systems/contents/content";
import { firstBorderWidth } from "../../settings/mainmarks/mainmarks";
import { PropsForStartAnimation, PropsForEndAnimation } from "../../types/systems/contents/contents-props-creater";
import CreatedPropsCreater from "../MainMarks/created-props-creater";
import ToolsPropsCreater from "../MainMarks/tools-props-creater";
import ContactPropsCreater from "../MainMarks/contact-props-creater";
import MainMarkProps from "../../types/common/mainmarks";


export default class ContentPropsCreater {

    private _judgeContentType(type: PropsForStartAnimation["contentType"],props:noCalculateContentProps): MainMarkProps{
        if(type=="AboutMe"){
            return new AboutMePropsCreater(props).createProps();
        }else if(type=="Created"){
            return new CreatedPropsCreater(props).createProps();
        }else if(type=="Tools"){
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
        const tmpContentName:noCalculateContentProps = {
            borderColor,
            word,
            wordColor,
            display,
            rotate: 45,
            zIndex: 0,
            shadow: 0,
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
        // tmpProps.shadow = 24;
        // const aboutMeProps = new AboutMePropsCreater(tmpProps);
        // let tmpAboutMeProps = aboutMeProps.createProps();
        // const {
        //     top,
        //     left,
        //     widthHeight,
        //     secondWidthHeight,
        //     thirdWidthHeight,
        //     borderWidth
        // } = tmpAboutMeProps;
        const display:MainMarkProps["display"] = "flex"
        return Object.assign(
            props,{
                rotate: 0,
                zIndex: 200,
                shadow: 24,
                top: 0,
                left: 0,
                display,
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

    // createEndAboutMeContentProps(props: noCalculateContentProps){
    //     const tmpProps = Object.assign({},props);
    // }

}
