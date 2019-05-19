import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { colorName } from '../../types/systems/colors/color-word-controller';
import { ColorObjects } from '../../types/systems/colors/color-obj-controller';
import { Color } from '@material-ui/core';

export default class ColorObjController {
    private _colors: ColorObjects;
    constructor(){
        this._colors = {
            red: red,
            pink: pink,
            purple: purple,
            deepPurple: deepPurple,
            indigo: indigo,
            blue: blue,
            lightBlue: lightBlue,
            cyan: cyan,
            teal: teal,
            green: green,
            lightGreen: lightGreen,
            lime: lime,
            yellow: yellow,
            amber: amber,
            orange: orange,
            deepOrange: deepOrange,
            brown: brown,
            grey: grey,
            blueGrey: blueGrey
        };
    }


    specifiedColor(colorName: colorName):Color {
        return this._colors[colorName];
    }

    randomColor():Color {
        const randomKey = Object.keys(this._colors)[Math.floor(Math.random()*Object.keys(this._colors).length)];
        return this._colors[randomKey];
    }

}
