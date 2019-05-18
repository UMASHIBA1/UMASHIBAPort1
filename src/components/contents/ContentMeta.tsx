import * as React from 'react';
import {createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { StyleRules } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { ChangeMainMarkDispatch } from '../../types/redux/map-dispatch-to-props';
// import EventListener from 'react-event-listener';
// import MainMarkProps from '../../types/common/mainmarks';
import ColorObjController from '../../systems/Colors/color-obj-controller';
import ContentProps from '../../types/systems/contents/content';

const borderStyle = "solid";
const transitionTime = "1.2s";
const rotateTransitionTime = "0.6s";
const rotateTransitionTimingFunction = "cubic-bezier(0.2, -0.19, 0.99, -0.61)"


const styles = (theme:Theme): StyleRules => createStyles({
    paper: {
        transition: `top ${transitionTime}, left ${transitionTime}, width ${transitionTime}, height ${transitionTime}, border-width ${transitionTime}, transform ${rotateTransitionTime} ${rotateTransitionTimingFunction}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 200
    },
    outline: {
        position: "absolute",
        borderStyle: borderStyle
    },
    second: {
        borderStyle: borderStyle
    },
    third: {
        borderStyle: borderStyle
    },
    centerWord: {
        transition: `${rotateTransitionTime}  ${rotateTransitionTimingFunction}`,
    }
})



interface ContentMetaGalapagosType {
    ChangeMainMarkDispatch: ChangeMainMarkDispatch;
    ContentProps: ContentProps;
}

type Props = ContentMetaGalapagosType & WithStyles<typeof styles>;
class ContentMeta extends React.Component<Props>{
    protected _resizeTimer: number;
    protected _resizeWaitTime: number;
    protected _colorObj: ColorObjController;
    constructor(props: Props){
        super(props);
        this._resizeTimer = 0;
        this._resizeWaitTime = 200;
        this._colorObj = new ColorObjController();
    }


    render(){
        const {
            borderColor,
            word,
            wordColor,
            zIndex,
            rotate,
            display,
            top,
            left,
            borderWidth,
            width,
            height,
            secondWidth,
            secondHeight,
            thirdWidth,
            thirdHeight
        } = this.props.ContentProps;
        return (
            display==="hidden"?<React.Fragment />:
            <React.Fragment>
                <Paper elevation={24} 
                className={`${this.props.classes.outline} ${this.props.classes.paper}`}
                style={{
                    top,
                    left,
                    width: width,
                    height: height,
                    borderWidth,
                    borderColor: this._colorObj.specifiedColor(borderColor)[300],
                    transform: `rotate(${rotate}deg)`,
                    zIndex
                }}
                >
                    <Paper className={`${this.props.classes.paper} ${this.props.classes.second}`}
                    style={{
                        top,
                        left,
                        width: secondWidth,
                        height: secondHeight,
                        borderWidth,
                        borderColor: this._colorObj.specifiedColor(borderColor)[500]
                    }}
                    >
                        <Paper className={`${this.props.classes.paper} ${this.props.classes.third}`}
                        style={{
                            top,
                            left,
                            width: thirdWidth,
                            height: thirdHeight,
                            borderWidth,
                            borderColor: this._colorObj.specifiedColor(borderColor)[900]
                        }}>
                            {/* <Typography color={'error'} align={'center'} variant={this.props.MainMarkProps.fontVariant} className={this.props.classes.centerWord} style={{
                                color: wordColor,
                                transform: `rotate(-${rotate}deg)`
                            }}>
                                {word}
                            </Typography> */}
                        </Paper>
                    </Paper>
                </Paper>
                {/* <EventListener target='window' onResize={()=>(this._changeTopLeftWidthHeight(this.props.MainMarkProps,this.props.ChangeMainMarkDispatch,this.props.MainMarkCreaterName))}></EventListener> */}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ContentMeta);
