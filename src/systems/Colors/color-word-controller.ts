import { colorName, warmColorName, coldColorName } from '../../types/systems/colors/color-word-controller';

export default class ColorWordController{
    private _colors: colorName[];
    constructor(){
        this._colors = [
            "red",
            "pink",
            "purple",     
            "deepPurple", 
            "indigo",
            "blue",    
            "lightBlue",   
            "cyan",  
            "teal",
            "green",
            "lightGreen",
            "lime",
            "yellow",
            "amber",
            "orange",
            "deepOrange",
            "brown",
            "grey",
            "blueGrey"
                    ]
    }

    
    randomWarmColorWord():warmColorName{
        const warmColors:warmColorName[] = [
            "red",
            "pink",
            "yellow",
            "amber",
            "orange",
            "deepOrange"
        ]
        const randomNum = Math.floor(Math.random()*Object.keys(warmColors).length);
        return warmColors[randomNum];
    }

    randomColdColorWord():coldColorName{
        const coldColors:coldColorName[] = [
            "purple",
            "deepPurple",
            "indigo",
            "blue",
            "lightBlue",
            "cyan",
            "teal",
            "blueGrey"
        ];
        const randomNum = Math.floor(Math.random()*Object.keys(coldColors).length);
        return coldColors[randomNum];
    }

    randomColorWord():colorName{
        const randomNum = Math.floor(Math.random()*Object.keys(this._colors).length);
        return this._colors[randomNum];
    }
}
