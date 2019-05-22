import { firstBreakpointWidth, secondBreakpointWidth } from "../../settings/common-setting";
import MainMarksProps, { noCalculateMainMarkProps } from "../../types/common/mainmarks";
import MainMarksCommonPropsCreater from "./mainmarks-props-creater";
import { allCommonPropTypes, topLeft } from "../../types/systems/mainmarks/mainmarks-props-creater";
import { underBreakPointWidth, underBreakPointTopMargin, underBreakPointBetweenMargin } from "../../settings/mainmarks/mainmarks";

export default class AboutMePropsCreater extends MainMarksCommonPropsCreater {
    private props: noCalculateMainMarkProps;

    constructor(props:noCalculateMainMarkProps){
        super();
        this.props = props;
    }

    private _calculateTopAndLeft(widthHeight: MainMarksProps["widthHeight"],windowWidth:number,windowHeight:number){
        if(windowWidth > firstBreakpointWidth){
            return{
                top: windowHeight/2 - widthHeight/2,
                left: windowWidth/2 - widthHeight/2,
            };
        }
        else if(windowWidth > secondBreakpointWidth){
            return{
                top: windowHeight/2 - widthHeight/2,
                left: windowWidth/2 - widthHeight/2,
            };
        }else{
            const topMargin:number = underBreakPointTopMargin;
            const betweenMargin:number = underBreakPointBetweenMargin;
            const verticalIndex:number = 1;
            return{
                top: topMargin + underBreakPointWidth * (verticalIndex - 1) + betweenMargin * (verticalIndex-1),
                left: windowWidth/2 - widthHeight/2,
            };
        }
    }


    createProps():MainMarksProps{
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const commonProps:allCommonPropTypes = this._calculateCommonProps(windowWidth,windowHeight);
        const topLeft:topLeft = this._calculateTopAndLeft(commonProps.widthHeight,windowWidth,windowHeight);
        return Object.assign(commonProps,topLeft,this.props);
    }

}
