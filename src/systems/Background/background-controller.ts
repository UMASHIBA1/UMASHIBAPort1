import { LocationXY } from '../../types/systems/background/background-common';
import { breakpointWidth } from '../../settings/common-setting';
import BGSquareLocationCalcurator from './BG-square-location-calcurator';
import ColorWordController from '../Colors/color-word-controller';
import { backgroundSquareProp } from '../../types/common/background-square';
export default class BackgroundController {

    private  _windowWidth: number;
    private  _windowHeight: number;
    private _horizontalSquareNum: number;
    private _squareWidthAndHeight: number;
    private _verticalSquareNum: number;
    private _sideLength: number;
    
    constructor(){
        this._windowHeight = window.innerHeight;
        this._windowWidth = window.innerWidth;

        // キャッシュ (cash)
        this._horizontalSquareNum = this._judgeHorizontalSquareNum();
        this._squareWidthAndHeight = this._calculateSquareWidthAndHeight();
        this._verticalSquareNum = this._calculateVerticalSquareNum();
        this._sideLength = this._calculateSquareSideLength();
    }

    private _judgeHorizontalSquareNum(): number{
        if(this._windowWidth<breakpointWidth){
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

    private _calculateSquareSideLength(): number{
        const squareWidth: number = this._squareWidthAndHeight;
        const root2: number = Math.sqrt(2);
        return squareWidth*(1/root2);
    }

    
    // squareの真ん中がちょうど画面の真ん中に来るようなtopとleftの位置を計算します。
    private _calculateCenterLocation(): LocationXY{
        const centerX: number = this._windowWidth/2 - this._sideLength/2;
        const centerY: number = this._windowHeight/2 - this._sideLength/2;
        console.group('calc');
        console.log(`this.width: ${this._windowWidth}`);
        console.log(`this.height: ${this._windowHeight}`);
        console.log(`centerLocation: (${centerX},${centerY})`);
        console.log(`sideLength: ${this._sideLength}`);
        console.groupEnd();
        return {X:centerX, Y:centerY};
    }

    createBackgroundProps(): backgroundSquareProp[]{

        const backgroundSquareProps: backgroundSquareProp[] = [];
        const colorObj: ColorWordController = new ColorWordController();
        const centerLocation: LocationXY = this._calculateCenterLocation();
        let nowId: number = 1;
        let nowHorizontalIndex: number = -Math.floor(this._horizontalSquareNum/2);
        let nowVerticalIndex: number = -Math.floor(this._verticalSquareNum/2);
        
        const slipCenterLocation: LocationXY = {
            X: centerLocation.X + this._sideLength * 1/Math.sqrt(2),
            Y: centerLocation.Y + this._sideLength * 1/Math.sqrt(2)
        }

        console.log(`centerLocation: ${centerLocation.X},${centerLocation.Y}`);
        console.log(`slipCenterLocation: ${slipCenterLocation.X}, ${slipCenterLocation.Y}`);
        

        for (let i=0;i<this._verticalSquareNum;i++){
            let tmpNowHorizontalIndex: number = nowHorizontalIndex;

            for (let k=0;k<this._horizontalSquareNum;k++){
                
                const SquareObj: BGSquareLocationCalcurator = new BGSquareLocationCalcurator(
                    {
                        id: nowId,
                        colorName: colorObj.randomColorWord(),
                        // word: `(${nowVerticalIndex},${tmpNowHorizontalIndex})`,
                        word: nowId.toString(),
                        sideLength: this._sideLength,
                        zindex: 6,
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
                        // word: `(slip: ${nowVerticalIndex},${tmpNowHorizontalIndex})`,
                        word: nowId.toString(),
                        sideLength: this._sideLength,
                        zindex: 6,
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
