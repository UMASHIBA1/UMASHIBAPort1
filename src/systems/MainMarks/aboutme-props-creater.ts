import { firstBreakpointWidth, secondBreakpointWidth } from "../../settings/common-setting";
// import { LocationXY } from "../../types/systems/background/background-common";
import MainMarksProps, { hasCalculateMainMarksProps, noCalculateMainMarkProps } from "../../types/common/mainmarks";

export default class AboutMePropsCreater {
    
    private _upperBreakpointWidthPercent: number;
    private _middleBreakpointWidthPercent: number;
    private _underBreakpointWidthPercent: number;
    private props: noCalculateMainMarkProps;

    constructor(props:noCalculateMainMarkProps){
        this.props = props;
        this._upperBreakpointWidthPercent = 0.25;
        this._middleBreakpointWidthPercent = 0.35;
        this._underBreakpointWidthPercent = 0.40;
    }

    private _calculateTopLeftWidthHeight(): hasCalculateMainMarksProps{
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if(windowWidth > firstBreakpointWidth){
            const widthHeight = windowWidth * this._upperBreakpointWidthPercent;
            return{
                top: windowHeight/2 - widthHeight/2,
                left: windowWidth/2 - widthHeight/2,
                widthHeight,
                secondWidthHeight: widthHeight - 30,
                thirdWidthHeight: widthHeight - 60,
                borderWidth: 7,
                fontVariant: "h3"
            };
        }
        else if(windowWidth > secondBreakpointWidth){
            const widthHeight = windowWidth * this._middleBreakpointWidthPercent;
            return{
                top: windowHeight/2 - widthHeight/2,
                left: windowWidth/2 - widthHeight/2,
                widthHeight,
                secondWidthHeight: widthHeight - 30,
                thirdWidthHeight: widthHeight - 60,
                borderWidth: 7,
                fontVariant: "h4"
            };
        }else{
            const widthHeight = windowWidth * this._underBreakpointWidthPercent;
            return{
                top: windowHeight/5 - widthHeight/2,
                left: windowWidth/2 - widthHeight/2,
                widthHeight,
                secondWidthHeight: widthHeight - 20,
                thirdWidthHeight: widthHeight - 40,
                borderWidth: 5,
                fontVariant: "h5"
            };
        }
    }

    createProps(): MainMarksProps{
        const calculateResult = this._calculateTopLeftWidthHeight();
        return Object.assign(this.props,calculateResult);
    }

}
