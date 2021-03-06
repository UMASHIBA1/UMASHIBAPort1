import * as React from 'react';
import {createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { StyleRules } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { ChangeContentDispatch } from '../../../types/redux/map-dispatch-to-props';
import ColorObjController from '../../../systems/Colors/color-obj-controller';
import ContentProps from '../../../types/systems/contents/content';
import ContentPropsCreater from '../../../systems/Contents/content-props-creater';
import { contentType } from '../../../types/common/mainmarks';
import AboutMeMain from '../Parts/AboutMeMain';
import CreatedMain from '../Parts/CreatedMain';
import ToolsMain from '../Parts/ToolsMain';
import ContactMain from '../Parts/ContactMain';
import BlogMain from '../Parts/BlogMain';
import EventListener from 'react-event-listener';

const borderStyle = "solid";
const transitionTime_s = 1.2;
const rotateTransitionTime_s = 0.6;
const marginTime_ms = 10
const rotateTransitionTimingFunction = "cubic-bezier(0.2, -0.19, 0.99, -0.61)"


const styles = (theme:Theme): StyleRules => createStyles({
    paper: {
        transition: `top ${transitionTime_s}s, left ${transitionTime_s}s, width ${transitionTime_s}s, height ${transitionTime_s}s, border-width ${transitionTime_s}s, transform ${rotateTransitionTime_s}s ${rotateTransitionTimingFunction}`,
        transform: 'translate3d(0,0,0)',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 200
    },
    outline: {
        position: "absolute",
        borderStyle: borderStyle,
    },
    second: {
        borderStyle: borderStyle
    },
    third: {
        borderStyle: borderStyle
    },
    centerWord: {
        transition: `transform ${rotateTransitionTime_s}s ${rotateTransitionTimingFunction}, opacity ${transitionTime_s}s`,
    }
})

interface ContentMetaGalapagosType {
    ContentProps: ContentProps;
    contentType: contentType;
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
        if(this.props.ContentProps.display!=="hidden"){
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                const contentProps: ContentProps = Object.assign({},this.props.ContentProps,{rotate:0});
                this.props.ChangeContentProps(contentProps);
                setTimeout(()=>{
                    const {
                        word,
                        wordColor,
                        borderColor
                    } = this.props.ContentProps;
                    const contentObj: ContentPropsCreater = new ContentPropsCreater();
                    const endAnimationProps: ContentProps = contentObj.createEndContentProps({
                        word,wordColor,borderColor
                    });
                    this.props.ChangeContentProps(endAnimationProps);
                    
                    setTimeout(() => {
                        const ContentMainCanSee:ContentProps = Object.assign({},endAnimationProps,{displayMainContent:true});
                        this.props.ChangeContentProps(ContentMainCanSee);
                    }, (transitionTime_s + 0.2) * 1000);
                },(rotateTransitionTime_s + 0.4)*1000);
            }, marginTime_ms);
        }
    }

    componentWillUnmount(){
        document.body.style.overflow = "visible";
    }


    _judgeMainContent(contentType:contentType){
        if(contentType==="AboutMe"){
            return (
                <AboutMeMain></AboutMeMain>
            );
        }else if(contentType==="Created"){
            return(
                <CreatedMain></CreatedMain>
            );
        }else if(contentType==="Tools"){
            return(
                <ToolsMain></ToolsMain>
            );
        }else if(contentType==="Contact"){
            return(
                <ContactMain></ContactMain>
            );
        }else{
            return <BlogMain></BlogMain>
        }
    }

    render(){
        const {
            borderColor,
            word,
            wordColor,
            zIndex,
            rotate,
            wordOpacity,
            displayMainContent,
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
        console.log((width=="100%" && height == "100%")?`translate(${top}, ${left})`:`rotate(${rotate}deg) translate(${top}, ${left})`);
        return (
            <React.Fragment>
                <EventListener target='window' onResize={()=>(this._judgeMainContent(this.props.contentType))}></EventListener>                    
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
                    zIndex,
                }}
                >
                    <Paper className={`${this.props.classes.paper} ${this.props.classes.second}`}
                    style={{
                        top,
                        left,
                        width: secondWidth,
                        height: secondHeight,
                        borderWidth,
                        borderColor: this._colorObj.specifiedColor(borderColor)[500],
                    }}
                    >
                        <Paper className={`${this.props.classes.paper} ${this.props.classes.third}`}
                        style={{
                            top,
                            left,
                            width: thirdWidth,
                            height: thirdHeight,
                            borderWidth,
                            borderColor: this._colorObj.specifiedColor(borderColor)[900],
                        }}>
                        {wordOpacity===0 && displayMainContent?this._judgeMainContent(this.props.contentType):
                        <Typography color={'error'} align={'center'} variant={fontVariant} className={this.props.classes.centerWord} style={{
                                color: wordColor,
                                transform: `rotate(-${rotate}deg)`,
                                opacity: wordOpacity
                            }}>
                                {word}
                            </Typography>}
                        </Paper>
                    </Paper>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ContentMeta);
