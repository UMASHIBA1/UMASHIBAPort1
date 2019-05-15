import { firstBreakpointWidth, secondBreakpointWidth } from "../../settings/common-setting";
import { noCalculateMainMarkProps } from "../../types/common/mainmarks";
import { allCommonPropTypes } from "../../types/systems/mainmarks/mainmarks-props-creater";

export default class MainMarksCommonPropsCreater {
    private _upperBreakpointWidthPercent: number;
    private _middleBreakpointWidthPercent: number;
    private _underBreakpointWidthPercent: number;

    constructor(){
        this._upperBreakpointWidthPercent = 0.25;
        this._middleBreakpointWidthPercent = 0.35;
        this._underBreakpointWidthPercent = 0.40;
    }

    protected _calculateCommonProps(windowWidth: number): allCommonPropTypes{
        if(windowWidth > firstBreakpointWidth){
            const widthHeight = windowWidth * this._upperBreakpointWidthPercent;
            return{
                widthHeight,
                secondWidthHeight: widthHeight - 30,
                thirdWidthHeight: widthHeight - 60,
                borderWidth: 7,
                fontVariant:"h3"
            };
        }
        else if(windowWidth > secondBreakpointWidth){
            const widthHeight = windowWidth * this._middleBreakpointWidthPercent;
            return{
                widthHeight,
                secondWidthHeight: widthHeight - 30,
                thirdWidthHeight: widthHeight - 60,
                borderWidth: 7,
                fontVariant: "h4"
            };
        }else{
            const widthHeight = windowWidth * this._underBreakpointWidthPercent;
            return{
                widthHeight,
                secondWidthHeight: widthHeight - 20,
                thirdWidthHeight: widthHeight - 40,
                borderWidth: 5,
                fontVariant: "h5"
            };
        }
    }

}
