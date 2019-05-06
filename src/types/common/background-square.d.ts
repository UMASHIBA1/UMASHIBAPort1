import { colorName } from '../systems/colors/color-word-controller';

export interface backgroundSquareProp {
    id: number,
    colorName: colorName,
    word: string,
    sideLength: number,
    zindex: number,
    top: number | string,
    left: number | string,
}
