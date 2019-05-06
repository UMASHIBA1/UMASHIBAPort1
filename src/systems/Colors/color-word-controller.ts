import { colorName } from '../../types/systems/colors/color-word-controller';

export default class ColorWordController{
    private _colors: colorName[];
    constructor(){
        this._colors =   [
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

    randomColorWord():colorName{
        const randomNum = Math.floor(Math.random()*Object.keys(this._colors).length);
        return this._colors[randomNum];
    }
}
