import { LocationXY } from '../../types/systems/background/background-common';
export default class BackgroundController {

    private  _windowWidth: number;
    private  _windowHeight: number;
    private _sideLength: number;
    // 作成する物
    // [
    //     {
    //         id: number,
    //         colorName: colorNames,
    //         word: string,
    //         sideLength: number,
    //         zindex: number,
    //         top: number | string,
    //         left: number | string,
    //     }
    // ]

    private _calculateCenterLocation(): LocationXY{
        const centerX: number = 1/2 * this._windowWidth - 1/2 * this._sideLength;
        const centerY: number = 1/2 * this._windowHeight - 1/2 * this._sideLength;
        return {X:centerX, Y:centerY};
    }

    

}
