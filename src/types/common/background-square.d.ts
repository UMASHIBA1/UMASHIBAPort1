import { colorName } from '../systems/colors/color-word-controller';
import { CSSProperties } from 'react';

export interface backgroundSquareProp {
    id: number,
    colorName: colorName,
    word: string,
    sideLength: number,
    zindex: CSSProperties["zIndex"],
    top: number | string,
    left: number | string,
}
