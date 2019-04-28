import {colorNames } from '../../types/systems/colors/color-word-controller';
import { backgroundSquareProp } from '../../types/components/background/background-square';
import { LocationXY } from '../../types/systems/background/background-common';

// BGSquareのLocationを座標から計算し、BackgroundSquarePropをはく
class BGSquareLocationCalcurator {
    // 中心BGSquareのBGSquareの座標を(0,0)、
    // 中心のBGSquareの真上のBGSquareの座標が(0,-2)
    // 中心のBGSquareの左下のBGSquareの座標が(-1,1)
    // それらをhorizontalIndexとverticalIndexに表す。
    private _id: number;
    private _colorName: colorNames;
    private _word: string;
    private _sideLength: number;
    private _zindex: number;

    private _horizontalIndex: number;
    private _verticalIndex: number;
    
    private  _windowWidth: number;
    private  _windowHeight: number;

    constructor(
        id: number,
        colorName: colorNames,
        word: string,
        sideLength: number,
        zindex: number,

        horizontalIndex: number,
        verticalIndex: number
        ){
        this._id = id;
        this._colorName = colorName;
        this._word = word;
        this._sideLength=sideLength;
        this._zindex = zindex;

        this._windowHeight = window.innerHeight;
        this._windowWidth = window.innerWidth;
        
        this._horizontalIndex = horizontalIndex;
        this._verticalIndex = verticalIndex;
    }


    private _calculateCenterLocation(): LocationXY{
        const centerX: number = 1/2 * this._windowWidth - 1/2 * this._sideLength;
        const centerY: number = 1/2 * this._windowHeight - 1/2 * this._sideLength;
        return {X:centerX, Y:centerY}
    }

    private _calculateTargetLocation(): LocationXY{
        const root2 = Math.sqrt(2);
        const {X,Y} = this._calculateCenterLocation();
        const targetX: number = X + ((1/root2 * this._sideLength + root2 * this._sideLength) * this._horizontalIndex);
        const targetY: number = Y + ((1/root2 * this._sideLength + root2 * this._sideLength) * this._verticalIndex);
        return {X: targetX,Y: targetY};
    }

    createOneSquare(): backgroundSquareProp{
        const targetLocation: LocationXY = this._calculateTargetLocation();
        return {
            id: this._id,
            colorName: this._colorName,
            top: targetLocation.Y,
            left: targetLocation.X,
            word: this._word,
            sideLength: this._sideLength,
            zindex: this._zindex
        }
    }

}

export default BGSquareLocationCalcurator;
