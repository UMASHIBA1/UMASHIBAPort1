import { LocationXY } from "./background-common";
import { colorName } from "../colors/color-word-controller";

export interface BGSquareLocationCalcuratorProps {
    id: number,
    colorName: colorName,
    word: string,
    sideLength: number,
    zindex: number,
    centerLocation: LocationXY,
    horizontalIndex: number,
    verticalIndex: number
}
