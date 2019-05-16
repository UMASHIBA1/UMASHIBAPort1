import { firstBreakpointWidth, secondBreakpointWidth } from "../../settings/common-setting";
import { allCommonPropTypes } from "../../types/systems/mainmarks/mainmarks-props-creater";
import { upperBreakPointWidthPercent,middleBreakPointWidthPercent,underBreakPointWidth } from '../../settings/mainmarks/mainmarks';

export default class MainMarksCommonPropsCreater {

    protected _calculateCommonProps(windowWidth: number,windowHeight: number): allCommonPropTypes{
        const root2 = Math.sqrt(2);
        if(windowWidth > firstBreakpointWidth){
            let widthHeight = windowWidth * upperBreakPointWidthPercent;
            if(widthHeight* root2 > windowHeight/2){
                widthHeight = (windowHeight/2)/root2 - 10;
            }
            return{
                widthHeight,
                secondWidthHeight: widthHeight - 30,
                thirdWidthHeight: widthHeight - 60,
                borderWidth: 7,
                fontVariant:"h3"
            };
        }
        else if(windowWidth > secondBreakpointWidth){
            const widthHeight: number = windowWidth * middleBreakPointWidthPercent;
            return{
                widthHeight,
                secondWidthHeight: widthHeight - 30,
                thirdWidthHeight: widthHeight - 60,
                borderWidth: 7,
                fontVariant: "h4"
            };
        }else{
            const widthHeight:number = underBreakPointWidth;
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
