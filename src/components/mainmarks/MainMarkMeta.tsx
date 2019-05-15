import * as React from 'react';
import {createStyles, Theme } from '@material-ui/core/styles';
import { StyleRules } from '@material-ui/core/styles';
import ColorObjController from '../../systems/Colors/color-obj-controller';
import MainMarkMetaType from '../../types/common/mainmarks';


class MainMarkMeta<T extends MainMarkMetaType> extends React.Component<T>{
    protected _resizeTimer: number;
    protected _resizeWaitTime: number;
    protected _colorObj: ColorObjController;
    constructor(props: T){
        super(props);
        this._resizeTimer = 0;
        this._resizeWaitTime = 200;
        this._colorObj = new ColorObjController();
    }

}



const tiltAngle = "45deg";


const borderStyle = "solid";

// You have to 'withStyles(mainMarkStyles)(MainMarkComponent)' in child file.
export const mainMarkStyles = (theme:Theme) :StyleRules => createStyles({
    paper: {
        transition: "1.2s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    outline: {
        zIndex: 100,
        position: "absolute",
        transform: `rotate(${tiltAngle})`,
        borderStyle: borderStyle
    },
    second: {
        borderStyle: borderStyle
    },
    third: {
        borderStyle: borderStyle
    },
    centerWord: {
        transform: `rotate(-${tiltAngle})`,
    }
});


export default MainMarkMeta;
