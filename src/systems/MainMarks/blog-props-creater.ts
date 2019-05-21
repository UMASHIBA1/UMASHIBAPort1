import { firstBreakpointWidth, secondBreakpointWidth } from "../../settings/common-setting";
import MainMarksProps, { noCalculateMainMarkProps } from "../../types/common/mainmarks";
import MainMarksCommonPropsCreater from "./mainmarks-props-creater";
import { allCommonPropTypes, topLeft } from "../../types/systems/mainmarks/mainmarks-props-creater";
import { underBreakPointWidth, underBreakPointTopMargin, underBreakPointBetweenMargin } from "../../settings/mainmarks/mainmarks";
import BackgroundController from "../Background/background-controller";


export default class BlogPropsCreater extends MainMarksCommonPropsCreater {
    private props: noCalculateMainMarkProps;
    constructor(props:noCalculateMainMarkProps){
        super();
        this.props = props;
    }

    private _calculateTopAndLeft(widthHeight: MainMarksProps["widthHeight"],windowWidth:number,windowHeight:number){
        const root2:number = Math.sqrt(2);
        if(windowWidth > firstBreakpointWidth){
            return{
                top: windowHeight * 3/4 - widthHeight/2,
                left: windowWidth/4 - widthHeight/2
            };
        }
        else if (windowWidth > secondBreakpointWidth){
            const backgroundObj = new BackgroundController();
            const YIndex = 1;
            const XIndex = -1;
            const backgroundSideLength = backgroundObj.calculateSquareSideLength();
            const {X,Y} = backgroundObj.calculateCenterLocation();
            const diffentOfBackgroundAndMark = backgroundSideLength - widthHeight;
            return{
                top: Y + (root2 * backgroundSideLength) * YIndex / 2 + diffentOfBackgroundAndMark/2,
                left: X + (root2 * backgroundSideLength) * XIndex / 2 + diffentOfBackgroundAndMark/2,
            };
        }
        else{
            const topMargin = underBreakPointTopMargin;
            const betweenMargin = underBreakPointBetweenMargin;
            const verticalIndex = 5;
            return{
                top: topMargin + underBreakPointWidth * (verticalIndex - 1) + betweenMargin * (verticalIndex-1),
                left: windowWidth/2 - widthHeight/2,
            };
        }
    }

    createProps(){
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const commonProps:allCommonPropTypes = this._calculateCommonProps(windowWidth,windowHeight);
        const topLeft:topLeft = this._calculateTopAndLeft(commonProps.widthHeight,windowWidth,windowHeight);
        return Object.assign(commonProps,topLeft,this.props);
    }

}
