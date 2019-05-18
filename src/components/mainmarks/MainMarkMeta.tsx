import { Paper, Typography } from '@material-ui/core';
import { createStyles, StyleRules, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import EventListener from 'react-event-listener';
import ColorObjController from '../../systems/Colors/color-obj-controller';
import ContentPropsCreater from '../../systems/Contents/content-props-creater';
import AboutMePropsCreater from '../../systems/MainMarks/aboutme-props-creater';
import ContactPropsCreater from '../../systems/MainMarks/contact-props-creater';
import CreatedPropsCreater from '../../systems/MainMarks/created-props-creater';
import ToolsPropsCreater from '../../systems/MainMarks/tools-props-creater';
import MainMarkProps, { contentType, noCalculateMainMarkProps } from '../../types/common/mainmarks';
import { ChangeContentDispatch, ChangeMainMarkDispatch } from '../../types/redux/map-dispatch-to-props';
import { ContentCommonPropTypes } from '../../types/systems/contents/contents-props-creater';
import { MainMarkPropsCreater } from '../../types/systems/mainmarks/mainmarks-props-creater';


const borderStyle = "solid";
const transitionTime = "1.2s";
const rotateTransitionTime = "0.6s";
const rotateTransitionTimingFunction = "cubic-bezier(0.2, -0.19, 0.99, -0.61)";

export const styles = (theme:Theme) :StyleRules => createStyles({
    paper: {
        transition: `top ${transitionTime}, left ${transitionTime}, width ${transitionTime}, height ${transitionTime}, border-width ${transitionTime}, transform ${rotateTransitionTime} ${rotateTransitionTimingFunction}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
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
});

interface MainMarkGalapagosType {
    ChangeMainMarkDispatch: ChangeMainMarkDispatch;
    ChangeContentDispatch: ChangeContentDispatch;
    contentType: contentType;
    MainMarkProps: MainMarkProps;
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

    private _produceContent (
        ChangeContentDispatch: ChangeContentDispatch,
        contentType: ContentCommonPropTypes["contentType"],
        word: ContentCommonPropTypes["word"],
        wordColor: ContentCommonPropTypes["wordColor"],
        borderColor: ContentCommonPropTypes["borderColor"]
        ){
            const displaySetting = "flex";
            const contentObj = new ContentPropsCreater();
            const contentProps = contentObj.createFirstContentProps({
                contentType,
                word,
                wordColor,
                borderColor,
                display: displaySetting
            });
            ChangeContentDispatch(Object.assign({},contentProps));
    }


    private _judgeAndCreateMarkCreater(nowState: noCalculateMainMarkProps,MainMarkCreaterName: contentType): MainMarkPropsCreater{
        if(MainMarkCreaterName === "AboutMe"){
            return new AboutMePropsCreater(nowState);
        }else if(MainMarkCreaterName === "Created"){
            return new CreatedPropsCreater(nowState);
        }else if(MainMarkCreaterName === "Tools"){
            return new ToolsPropsCreater(nowState);
        }else{
            return new ContactPropsCreater(nowState);
        }
    }

    private _changeTopLeftWidthHeight(
        mainMarkProps: MainMarkProps,
        ChangeMainMarksDispatch: ChangeMainMarkDispatch,
        MainMarkCreaterName: contentType): void{
        if(this._resizeTimer !== 0){
            window.clearTimeout(this._resizeTimer);
        }
        this._resizeTimer = window.setTimeout(()=>{
            const {borderColor,word,wordColor,rotate,zIndex,shadow,display} = mainMarkProps;
            const calcObj = this._judgeAndCreateMarkCreater({borderColor,word,wordColor,rotate,zIndex,shadow,display},MainMarkCreaterName);
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
            zIndex,
            shadow,
            display
        } = this.props.MainMarkProps;
        const {ChangeContentDispatch,contentType} = this.props;
        return (
            <React.Fragment>
                <EventListener target='window' onResize={()=>(this._changeTopLeftWidthHeight(this.props.MainMarkProps,this.props.ChangeMainMarkDispatch,this.props.contentType))}></EventListener>
                <Paper elevation={shadow} 
                onClick={() => (this._produceContent(
                    ChangeContentDispatch,
                    contentType,
                    word,
                    wordColor,
                    borderColor
                ))}
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
            </React.Fragment>
        );
    }

}


export default withStyles(styles)(MainMarkMeta);
