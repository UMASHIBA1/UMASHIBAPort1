import AboutMePropsCreater from "../MainMarks/aboutme-props-creater";
import ContentProps, { noCalculateContentProps } from "../../types/systems/contents/content";
import { firstBorderWidth } from "../../settings/mainmarks/mainmarks";
import { ContentCommonPropTypes } from "../../types/systems/contents/contents-props-creater";
import CreatedPropsCreater from "../MainMarks/created-props-creater";
import ToolsPropsCreater from "../MainMarks/tools-props-creater";
import ContactPropsCreater from "../MainMarks/contact-props-creater";
import MainMarkProps from "../../types/common/mainmarks";


export default class ContentPropsCreater {


    private _judgeContentType(type: ContentCommonPropTypes["contentType"],props:noCalculateContentProps): MainMarkProps{
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


    createFirstContentProps(props: ContentCommonPropTypes):ContentProps{
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
            borderWidth
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
            width: widthHeight,
            height: widthHeight,
            secondWidth: secondWidthHeight,
            secondHeight: secondWidthHeight,
            thirdWidth: thirdWidthHeight,
            thirdHeight: thirdWidthHeight
        }
    }


    createEndAboutMeContentProps(props:noCalculateContentProps){
        const tmpProps = Object.assign({},props);
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
        const resultObj:ContentProps = Object.assign({},
            props,{
                top: 0,
                left: 0,
                borderWidth: firstBorderWidth,
                width: "100%",
                height: "200%",
                secondWidth: "calc(100% - 10px)",
                secondHeight: "calc(100% - 10px)",
                thirdWidth: "calc(100% - 10px)",
                thirdHeight: "calc(100% - 10px)"
            });
            return resultObj;
    }

    // createEndAboutMeContentProps(props: noCalculateContentProps){
    //     const tmpProps = Object.assign({},props);
    // }

}
