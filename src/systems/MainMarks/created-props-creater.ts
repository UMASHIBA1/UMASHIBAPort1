import { firstBreakpointWidth, secondBreakpointWidth } from "../../settings/common-setting";
import MainMarksProps, { noCalculateMainMarkProps } from "../../types/common/mainmarks";
import MainMarksCommonPropsCreater from "./mainmarks-props-creater";
import { allCommonPropTypes, topLeft } from "../../types/systems/mainmarks/mainmarks-props-creater";
import { LocationXY } from '../../types/systems/background/background-common';
import { underBreakPointWidth, underBreakPointTopMargin, underBreakPointBetweenMargin } from "../../settings/mainmarks/mainmarks";


export default class CreatedPropsCreater extends MainMarksCommonPropsCreater {
    private props: noCalculateMainMarkProps;
    constructor(props:noCalculateMainMarkProps){
        super();
        this.props = props;
    }

    private _calculateBackgroundCenterLocation(backgroundSideLength:number,windowWidth:number,windowHeight:number): LocationXY{
        const centerX: number = windowWidth/2 - backgroundSideLength/2;
        const centerY: number = windowHeight/2 - backgroundSideLength/2;
        return {X:centerX, Y:centerY};
    }

    private _judgeHorizontalSquareNum(windowWidth:number): number{
        if(windowWidth<firstBreakpointWidth){
            return 3;
        }else{
            return 5;
        }
    }

    private _calculateSquareWidthAndHeight(windowWidth:number): number{
        return windowWidth/(this._judgeHorizontalSquareNum(windowWidth) - 1);
    }

    private _calculateSquareSideLength(windowWidth:number): number{
        const squareWidth: number = this._calculateSquareWidthAndHeight(windowWidth);
        const root2: number = Math.sqrt(2);
        return squareWidth/root2;
    }

    private _calculateTopAndLeft(widthHeight: MainMarksProps["widthHeight"],windowWidth:number,windowHeight:number){
        const root2:number = Math.sqrt(2);
        if(windowWidth > firstBreakpointWidth){
            return{
                top: windowHeight/4 - widthHeight/2,
                left: windowWidth/4 - widthHeight/2
            };
        }
        else if(windowWidth > secondBreakpointWidth){
            const YIndex = -1;
            const XIndex = -1;
            const backgroundSideLength = this._calculateSquareSideLength(windowWidth);
            const {X,Y} = this._calculateBackgroundCenterLocation(backgroundSideLength,windowWidth,windowHeight);
            const diffentOfBackgroundAndMark = backgroundSideLength - widthHeight;
            return{
                top: Y + (root2 * backgroundSideLength) * YIndex / 2 + diffentOfBackgroundAndMark/2,
                left: X + (root2 * backgroundSideLength) * XIndex / 2 + diffentOfBackgroundAndMark/2,
            };
        }else{
            const topMargin = underBreakPointTopMargin;
            const betweenMargin = underBreakPointBetweenMargin;
            const verticalIndex = 2;
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
