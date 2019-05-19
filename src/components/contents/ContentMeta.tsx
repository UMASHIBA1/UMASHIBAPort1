import * as React from 'react';
import {createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { StyleRules } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { ChangeMainMarkDispatch, ChangeContentDispatch } from '../../types/redux/map-dispatch-to-props';
// import EventListener from 'react-event-listener';
// import MainMarkProps from '../../types/common/mainmarks';
import ColorObjController from '../../systems/Colors/color-obj-controller';
import ContentProps from '../../types/systems/contents/content';
import { Dispatch } from 'redux';
import { ChangeContentAction } from '../../types/redux/actions';
import ContentPropsCreater from '../../systems/Contents/content-props-creater';

const borderStyle = "solid";
const transitionTime_s = 1.2;
const rotateTransitionTime_s = 0.6;
const marginTime_ms = 10
const rotateTransitionTimingFunction = "cubic-bezier(0.2, -0.19, 0.99, -0.61)"


const styles = (theme:Theme): StyleRules => createStyles({
    paper: {
        transition: `top ${transitionTime_s}s, left ${transitionTime_s}s, width ${transitionTime_s}s, height ${transitionTime_s}s, border-width ${transitionTime_s}s, transform ${rotateTransitionTime_s}s ${rotateTransitionTimingFunction}`,
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
        transition: `transform ${rotateTransitionTime_s}s ${rotateTransitionTimingFunction}`,
    }
})

interface ContentMetaGalapagosType {
    ContentProps: ContentProps;
    ChangeContentProps :ChangeContentDispatch;
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


    componentDidMount(){
        if(this.props.ContentProps.display!="hidden"){
            setTimeout(() => {
                const contentProps = Object.assign({},this.props.ContentProps,{rotate:0});
                this.props.ChangeContentProps(contentProps);
                const {
                    word,
                    wordColor,
                    borderColor
                } = this.props.ContentProps;
                const contentObj = new ContentPropsCreater();
                const endAnimationProps = contentObj.createEndContentProps({
                    word,wordColor,borderColor
                });
                setTimeout(()=>{
                    this.props.ChangeContentProps(endAnimationProps);
                },transitionTime_s*1000)
            }, marginTime_ms);
        }
    }



    render(){
        const {
            borderColor,
            word,
            wordColor,
            zIndex,
            rotate,
            // display,
            top,
            left,
            borderWidth,
            width,
            height,
            secondWidth,
            secondHeight,
            thirdWidth,
            thirdHeight,
            fontVariant
        } = this.props.ContentProps;
        return (
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
                            <Typography color={'error'} align={'center'} variant={fontVariant} className={this.props.classes.centerWord} style={{
                                color: wordColor,
                                transform: `rotate(-${rotate}deg)`
                            }}>
                                {word}
                            </Typography>
                        </Paper>
                    </Paper>
                </Paper>
                {/* <EventListener target='window' onResize={()=>(this._changeTopLeftWidthHeight(this.props.MainMarkProps,this.props.ChangeMainMarkDispatch,this.props.MainMarkCreaterName))}></EventListener> */}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ContentMeta);
