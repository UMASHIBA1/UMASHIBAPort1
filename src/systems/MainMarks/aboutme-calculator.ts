import { firstBreakpointWidth, secondBreakpointWidth } from "../../settings/common-setting";
// import { LocationXY } from "../../types/systems/background/background-common";
import { MainMarksProps } from "../../types/common/mainmarks";

export default class AboutMeCalcurator {
    
    private _upperBreakpointWidthPercent: number;
    private _middleBreakpointWidthPercent: number;
    private _underBreakpointWidthPercent: number;

    constructor(){
        this._upperBreakpointWidthPercent = 0.25;
        this._middleBreakpointWidthPercent = 0.35;
        this._underBreakpointWidthPercent = 0.40;
    }

    calculateTopLeftWidthHeight(): MainMarksProps{
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if(windowWidth > firstBreakpointWidth){
            const widthHeight = windowWidth * this._upperBreakpointWidthPercent;
            return{
                widthHeight,
                top: windowHeight/2 - widthHeight/2,
                left: windowWidth/2 - widthHeight/2
            };
        }
        else if(windowWidth > secondBreakpointWidth){
            const widthHeight = windowWidth * this._middleBreakpointWidthPercent;
            return{
                widthHeight,
                top: windowHeight/2 - widthHeight/2,
                left: windowWidth/2 - widthHeight/2
            };
        }else{
            const widthHeight = windowWidth * this._underBreakpointWidthPercent;
            return{
                widthHeight,
                top: windowHeight/5 - widthHeight/2,
                left: windowWidth/2 - widthHeight/2
            };
        }
    }

}
