import { LocationXY } from '../../types/systems/background/background-common';
import { firstBreakpointWidth } from '../../settings/common-setting';
import BGSquareLocationCalcurator from './BG-square-location-calcurator';
import ColorWordController from '../Colors/color-word-controller';
import { backgroundSquareProp } from '../../types/common/background-square';
export default class BackgroundController {

    private  _windowWidth: number;
    private  _windowHeight: number;
    private _zIndex: number;
    private _horizontalSquareNum: number;
    private _squareWidthAndHeight: number;
    private _verticalSquareNum: number;
    private _sideLength: number;
    
    constructor(){
        this._windowHeight = window.innerHeight;
        this._windowWidth = window.innerWidth;
        this._zIndex = 10;

        // 計算結果のキャッシュ/cash of calculate result
        this._horizontalSquareNum = this._judgeHorizontalSquareNum();
        this._squareWidthAndHeight = this._calculateSquareWidthAndHeight();
        this._verticalSquareNum = this._calculateVerticalSquareNum();
        this._sideLength = this.calculateSquareSideLength();
    }

    private _judgeHorizontalSquareNum(): number{
        if(this._windowWidth<firstBreakpointWidth){
            return 3;
        }else{
            return 5;
        }
    }

    private _calculateSquareWidthAndHeight(): number{
        return this._windowWidth/(this._horizontalSquareNum - 1);
    }

    private _calculateVerticalSquareNum(): number{
        const squareHeight: number = this._squareWidthAndHeight;
        return Math.ceil(this._windowHeight/squareHeight)+1;
    }

    public calculateSquareSideLength(): number{
        const squareWidth: number = this._squareWidthAndHeight;
        const root2: number = Math.sqrt(2);
        return squareWidth/root2;
    }

    
    // squareの真ん中がちょうど画面の真ん中に来るようなtopとleftの位置を計算します。
    public calculateCenterLocation(): LocationXY{
        const centerX: number = this._windowWidth/2 - this._sideLength/2;
        const centerY: number = this._windowHeight/2 - this._sideLength/2;
        return {X:centerX, Y:centerY};
    }

    createBackgroundProps(): backgroundSquareProp[]{

        const backgroundSquareProps: backgroundSquareProp[] = [];
        const colorObj: ColorWordController = new ColorWordController();
        const centerLocation: LocationXY = this.calculateCenterLocation();
        let nowId: number = 1;
        let nowHorizontalIndex: number = -Math.floor(this._horizontalSquareNum/2);
        let nowVerticalIndex: number = -Math.floor(this._verticalSquareNum/2);
        
        const slipCenterLocation: LocationXY = {
            X: centerLocation.X + this._sideLength * 1/Math.sqrt(2),
            Y: centerLocation.Y + this._sideLength * 1/Math.sqrt(2)
        }
        

        for (let i=0;i<this._verticalSquareNum;i++){
            let tmpNowHorizontalIndex: number = nowHorizontalIndex;

            for (let k=0;k<this._horizontalSquareNum;k++){
                
                const SquareObj: BGSquareLocationCalcurator = new BGSquareLocationCalcurator(
                    {
                        id: nowId,
                        colorName: colorObj.randomColorWord(),
                        word:'',
                        sideLength: this._sideLength,
                        zindex: this._zIndex,
                        centerLocation: centerLocation,
                        horizontalIndex: tmpNowHorizontalIndex,
                        verticalIndex: nowVerticalIndex
                    }
                );

                const oneSquareProp: backgroundSquareProp = SquareObj.createOneSquare();
                backgroundSquareProps.push(oneSquareProp);
                tmpNowHorizontalIndex++;
                nowId++;
            }

            // reset
            tmpNowHorizontalIndex = nowHorizontalIndex

            
            for (let n=0;n<this._horizontalSquareNum;n++){
                
                const SquareObj:BGSquareLocationCalcurator = new BGSquareLocationCalcurator(
                    {
                        id: nowId,
                        colorName: colorObj.randomColorWord(),
                        word: '',
                        sideLength: this._sideLength,
                        zindex: this._zIndex,
                        centerLocation: slipCenterLocation,
                        horizontalIndex: tmpNowHorizontalIndex,
                        verticalIndex: nowVerticalIndex
                    }
                );

                const oneSquareProp: backgroundSquareProp = SquareObj.createOneSquare();
                backgroundSquareProps.push(oneSquareProp);
                tmpNowHorizontalIndex++;
                nowId++;
            }


            nowVerticalIndex++;

        }

        return backgroundSquareProps;
    }

}
