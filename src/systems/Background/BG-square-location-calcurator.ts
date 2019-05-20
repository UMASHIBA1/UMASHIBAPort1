import {colorName } from '../../types/systems/colors/color-word-controller';
import { backgroundSquareProp } from '../../types/common/background-square';
import { LocationXY } from '../../types/systems/background/background-common';
import { BGSquareLocationCalcuratorProps } from '../../types/systems/background/BG-square-location-calcurator';

// BGSquareのLocationを座標から計算し、BackgroundSquarePropをはく
class BGSquareLocationCalcurator {
    // 中心BGSquareの座標を(0,0)、
    // 中心のBGSquareの真上のBGSquareの座標が(0,-2)
    // 中心のBGSquareの左下のBGSquareの座標が(-1,1)
    // それらをhorizontalIndexとverticalIndexに表す。
    private _id: number;
    private _colorName: colorName;
    private _word: string;
    private _sideLength: number;
    private _zindex: number;

    private _centerLocation: LocationXY;
    private _horizontalIndex: number;
    private _verticalIndex: number;


    constructor({ 
        id,
        colorName,
        word,
        sideLength,
        zindex,
        centerLocation,
        horizontalIndex,
        verticalIndex 
    }: BGSquareLocationCalcuratorProps){
        this._id = id;
        this._colorName = colorName;
        this._word = word;
        this._sideLength=sideLength;
        this._zindex = zindex;

        this._centerLocation = centerLocation;
        this._horizontalIndex = horizontalIndex;
        this._verticalIndex = verticalIndex;
    }


    private _calculateTargetLocation(): LocationXY{
        const root2: number = Math.sqrt(2);
        const {X,Y}:LocationXY = this._centerLocation;
        const targetX: number = X + root2 * this._sideLength * this._horizontalIndex;
        const targetY: number = Y + root2 * this._sideLength * this._verticalIndex;
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
