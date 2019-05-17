import * as React from 'react';
import {createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { StyleRules, withStyles } from '@material-ui/core/styles';
import { Paper,Typography } from '@material-ui/core';
import ColorObjController from '../../systems/Colors/color-obj-controller';
import { ChangeMainMarksDispatch } from '../../types/redux/map-dispatch-to-props';
import EventListener from 'react-event-listener';
import { MainMarkPropsCreater, MainMarkCreaterName } from '../../types/systems/mainmarks/mainmarks-props-creater';
import MainMarkProps, { noCalculateMainMarkProps } from '../../types/common/mainmarks';
import AboutMePropsCreater from '../../systems/MainMarks/aboutme-props-creater';
import CreatedPropsCreater from '../../systems/MainMarks/created-props-creater';
import ToolsPropsCreater from '../../systems/MainMarks/tools-props-creater';
import ContactPropsCreater from '../../systems/MainMarks/contact-props-creater';


const borderStyle = "solid";
const transitionTime = "1.2s";
const rotateTransitionTime = "0.6s";
const rotateTransitionTimingFunction = "cubic-bezier(0.2, -0.19, 0.99, -0.61)"

export const styles = (theme:Theme) :StyleRules => createStyles({
    paper: {
        transition: `top ${transitionTime}, left ${transitionTime}, width ${transitionTime}, height ${transitionTime}, border-width ${transitionTime}, transform ${rotateTransitionTime} ${rotateTransitionTimingFunction}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    },
    outline: {
        zIndex: 100,
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
});

interface MainMarkGalapagosType {
    ChangeMainMarkDispatch: ChangeMainMarksDispatch;
    MainMarkCreaterName: MainMarkCreaterName;
    MainMarkProps: MainMarkProps
}



type Props =
MainMarkGalapagosType &  
WithStyles<typeof styles>; 

class MainMarkMeta extends React.Component<Props>{
    protected _resizeTimer: number;
    protected _resizeWaitTime: number;
    protected _colorObj: ColorObjController;
    constructor(props: Props){
        super(props);
        this._resizeTimer = 0;
        this._resizeWaitTime = 200;
        this._colorObj = new ColorObjController();
    }

    protected changeRotate (
        rotateSetting:           number,
        zIndexSetting:           number,
        mainMarkProps:           MainMarkProps,
        ChangeMainMarkDispatch: ChangeMainMarksDispatch
        ){
        ChangeMainMarkDispatch(Object.assign({}, mainMarkProps, {rotate: rotateSetting,zIndex: zIndexSetting}));
    }

    private _judgeAndCreateMarkCreater(nowState: noCalculateMainMarkProps,MainMarkCreaterName: MainMarkCreaterName): MainMarkPropsCreater{
        if(MainMarkCreaterName === "AboutMePropsCreater"){
            return new AboutMePropsCreater(nowState);
        }else if(MainMarkCreaterName === "CreatedPropsCreater"){
            return new CreatedPropsCreater(nowState);
        }else if(MainMarkCreaterName === "ToolsPropsCreater"){
            return new ToolsPropsCreater(nowState);
        }else{
            return new ContactPropsCreater(nowState);
        }
    }

    private _changeTopLeftWidthHeight(
        mainMarkProps: MainMarkProps,
        ChangeMainMarksDispatch: ChangeMainMarksDispatch,
        MainMarkCreaterName: MainMarkCreaterName): void{
        if(this._resizeTimer !== 0){
            window.clearTimeout(this._resizeTimer);
        }
        this._resizeTimer = window.setTimeout(()=>{
            const {borderColor,word,wordColor,rotate,zIndex} = mainMarkProps;
            const calcObj = this._judgeAndCreateMarkCreater({borderColor,word,wordColor,rotate,zIndex},MainMarkCreaterName);
            const topLeftWidthHeight = calcObj.createProps();
            ChangeMainMarksDispatch(topLeftWidthHeight);
        },this._resizeWaitTime);
    }


    render(){
        const {
            top,
            left,
            widthHeight,
            secondWidthHeight,
            thirdWidthHeight,
            borderWidth,
            word,
            wordColor,
            borderColor,
            rotate,
            zIndex
        } = this.props.MainMarkProps;
        return (
            <React.Fragment>
                <Paper elevation={24} 
                onMouseEnter={()=>(this.changeRotate(0,101,this.props.MainMarkProps,this.props.ChangeMainMarkDispatch))} 
                onMouseLeave={()=>(this.changeRotate(45,100,this.props.MainMarkProps,this.props.ChangeMainMarkDispatch))}
                className={`${this.props.classes.outline} ${this.props.classes.paper}`}
                style={{
                    top,
                    left,
                    width: widthHeight,
                    height: widthHeight,
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
                        width: secondWidthHeight,
                        height: secondWidthHeight,
                        borderWidth,
                        borderColor: this._colorObj.specifiedColor(borderColor)[500]
                    }}
                    >
                        <Paper className={`${this.props.classes.paper} ${this.props.classes.third}`}
                        style={{
                            top,
                            left,
                            width: thirdWidthHeight,
                            height: thirdWidthHeight,
                            borderWidth,
                            borderColor: this._colorObj.specifiedColor(borderColor)[900]
                        }}>
                            <Typography color={'error'} align={'center'} variant={this.props.MainMarkProps.fontVariant} className={this.props.classes.centerWord} style={{
                                color: wordColor,
                                transform: `rotate(-${rotate}deg)`
                            }}>
                                {word}
                            </Typography>
                        </Paper>
                    </Paper>
                </Paper>
                <EventListener target='window' onResize={()=>(this._changeTopLeftWidthHeight(this.props.MainMarkProps,this.props.ChangeMainMarkDispatch,this.props.MainMarkCreaterName))}></EventListener>
            </React.Fragment>
        );
    }

}


export default withStyles(styles)(MainMarkMeta);
