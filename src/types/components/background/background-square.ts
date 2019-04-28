import { colorNames } from '../../systems/colors/color-word-controller';

export interface backgroundSquareProp {
    id: number,
    colorName: colorNames,
    word: string,
    sideLength: number,
    zindex: number,
    top: number | string,
    left: number | string,
}
