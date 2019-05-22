import * as React from 'react';
import { Theme, Fab, Typography } from '@material-ui/core';
import { StyleRules, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dispatch } from 'redux';
import { 
    ChangeAboutMeContentPropsAction, 
    ChangeCreatedContentPropsAction, 
    ChangeToolsContentPropsAction, 
    ChangeContactContentPropsAction, 
    ChangeAboutMePropsAction, 
    ChangeCreatedPropsAction, 
    ChangeToolsPropsAction, 
    ChangeContactPropsAction, 
    ChangeBlogContentPropsAction, 
    ChangeBlogPropsAction 
} from '../../../../types/redux/actions';
import { 
    ChangeAboutMeContentProps,
    ChangeCreaetedContentProps, 
    ChangeToolsContentProps, 
    ChangeContactContentProps, 
    ChangeAboutMeProps, 
    ChangeCreatedProps, 
    ChangeToolsProps, 
    ChangeContactProps, 
    ChangeBlogContentProps, 
    ChangeBlogProps 
} from '../../../../redux/actions/action';
import MainMarkProps, { contentType } from '../../../../types/common/mainmarks';
import ContentPropsCreater from '../../../../systems/Contents/content-props-creater';
import { reduxState } from '../../../../types/redux/reducer';
import { connect } from 'react-redux';
import AboutMePropsCreater from '../../../../systems/MainMarks/aboutme-props-creater';
import CreatedPropsCreater from '../../../../systems/MainMarks/created-props-creater';
import ToolsPropsCreater from '../../../../systems/MainMarks/tools-props-creater';
import ContactPropsCreater from '../../../../systems/MainMarks/contact-props-creater';
import ColorObjController from '../../../../systems/Colors/color-obj-controller';
import BlogPropsCreater from '../../../../systems/MainMarks/blog-props-creater';
import { colorName } from '../../../../types/systems/colors/color-word-controller';


const transitionTime_s = 1.2;
const rotateTransitionTime_s = 0.6;


const styles = (theme:Theme):StyleRules => createStyles({
    position: {
        position: "absolute",
        bottom: "40px",
        right: "40px"
    }
});
interface GalapagosProps {
    contentType: contentType;
}

const mapDispatchToProps = (dispatch:Dispatch) => ({
    ChangeAboutMeContentProps: (payload:ChangeAboutMeContentPropsAction["payload"]) => (dispatch(ChangeAboutMeContentProps(payload))),
    ChangeCreatedProps: (payload: ChangeCreatedPropsAction["payload"]) => (dispatch(ChangeCreatedProps(payload))),
    ChangeToolsProps: (payload: ChangeToolsPropsAction["payload"]) => (dispatch(ChangeToolsProps(payload))),
    ChangeContactProps: (payload: ChangeContactPropsAction["payload"]) => (dispatch(ChangeContactProps(payload))),
    ChangeBlogProps: (payload: ChangeBlogPropsAction["payload"]) => (dispatch(ChangeBlogProps(payload))),
    ChangeCreatedContentProps: (payload:ChangeCreatedContentPropsAction["payload"]) => (dispatch(ChangeCreaetedContentProps(payload))),
    ChangeToolsContentProps: (payload:ChangeToolsContentPropsAction["payload"]) => (dispatch(ChangeToolsContentProps(payload))),
    ChangeContactContentProps: (payload:ChangeContactContentPropsAction["payload"]) => (dispatch(ChangeContactContentProps(payload))),
    ChangeBlogContentProps: (payload:ChangeBlogContentPropsAction["payload"]) => (dispatch(ChangeBlogContentProps(payload))),
    ChangeAboutMeProps: (payload: ChangeAboutMePropsAction["payload"]) => (dispatch(ChangeAboutMeProps(payload))),
});

const mapStateToProps = (state:reduxState) => ({
    aboutMeProps: state.aboutMeProps,
    createdProps: state.createdProps,
    toolsProps: state.toolsProps,
    contactProps: state.contactProps,
    blogProps: state.blogProps,
    aboutMeContentProps: state.aboutMeContentProps,
    createdContentProps: state.createdContentProps,
    toolsContentProps: state.toolsContentProps,
    contactContentProps: state.contactContentProps,
    blogContentProps: state.blogContentProps
});

type Props = 
WithStyles<typeof styles> & 
ReturnType<typeof mapDispatchToProps> & 
ReturnType<typeof mapStateToProps> &
GalapagosProps;


const defaultRotate:number = 45;
const defaultZIndex:number = 100;
const defaultWordColor:colorName = 'grey'
const defaultShadow:number = 12;
class BackButton extends React.Component<Props> {

    private _judgeStateAndDispatch(props:Props){
        let state: any;
        let mainMarkState: any;
        let dispatchContent: any;
        let dispatchMainmark: any;
        let mainMarkProp: MainMarkProps;
        if(props.contentType==="AboutMe"){
            state = props.aboutMeContentProps;
            mainMarkState = props.aboutMeProps;
            dispatchContent = props.ChangeAboutMeContentProps;
            dispatchMainmark = props.ChangeAboutMeProps;
            const mainMarkCreater:AboutMePropsCreater = new AboutMePropsCreater({
                word: "AboutMe",
                borderColor: 'blue',
                wordColor: defaultWordColor,
                rotate: defaultRotate,
                zIndex: defaultZIndex,
                shadow: defaultShadow,
                display: "flex"
            });
            mainMarkProp = mainMarkCreater.createProps();
        }else if(props.contentType==="Created"){
            state = props.createdContentProps;
            mainMarkState = props.createdProps;
            dispatchContent = props.ChangeCreatedContentProps;
            dispatchMainmark = props.ChangeCreatedProps;
            const mainMarkCreater:CreatedPropsCreater = new CreatedPropsCreater({
                word: 'Created',
                borderColor: 'red',
                wordColor: defaultWordColor,
                rotate: defaultRotate,
                zIndex: defaultZIndex,
                shadow: defaultShadow,
                display: "flex"
            });
            mainMarkProp = mainMarkCreater.createProps();
        }else if(props.contentType==="Tools"){
            state = props.toolsContentProps;
            mainMarkState = props.toolsProps;
            dispatchContent = props.ChangeToolsContentProps;
            dispatchMainmark = props.ChangeToolsProps;
            const mainMarkCreater:ToolsPropsCreater = new ToolsPropsCreater({
                word: 'Tools',
                borderColor: 'green',
                wordColor: defaultWordColor,
                rotate: defaultRotate,
                zIndex: defaultZIndex,
                shadow: defaultShadow,
                display: "flex"
            });
            mainMarkProp = mainMarkCreater.createProps();
        }else if(props.contentType==="Contact"){
            state = props.contactContentProps;
            mainMarkState = props.contactProps;
            dispatchContent = props.ChangeContactContentProps;
            dispatchMainmark = props.ChangeContactProps;
            const mainMarkCreater:ContactPropsCreater = new ContactPropsCreater({
                word: 'Contact',
                borderColor: 'purple',
                wordColor: defaultWordColor,
                rotate: defaultRotate,
                zIndex: defaultZIndex,
                shadow: defaultShadow,
                display: "flex"
            });
            mainMarkProp = mainMarkCreater.createProps();
        }
        else {
            state = props.blogContentProps;
            mainMarkState = props.blogProps;
            dispatchContent = props.ChangeBlogContentProps;
            dispatchMainmark = props.ChangeBlogProps;
            const mainMarkCreater:BlogPropsCreater = new BlogPropsCreater({
                word: 'Blog',
                borderColor: 'orange',
                wordColor: defaultWordColor,
                rotate: defaultRotate,
                zIndex: defaultZIndex,
                shadow: defaultShadow,
                display: "flex"
            });
            mainMarkProp = mainMarkCreater.createProps();
        }
        return {state,mainMarkState,dispatchContent,dispatchMainmark,mainMarkProp};
    }


    private _shrinkContent(props:Props):void{

        const {state,dispatchContent,dispatchMainmark,mainMarkProp} = this._judgeStateAndDispatch(props);
            const calcObj = new ContentPropsCreater();
            const animationProps = {
                contentType:props.contentType,
                word:props.contentType,
                wordColor: state.wordColor,
                borderColor: state.borderColor,
            }
            const calcResult = calcObj.createBackStartAnimationProps(animationProps);
            const rotatedCalcResult = calcObj.createBackEndAnimationProps(animationProps);
            const hiddenCalcResult = Object.assign({},rotatedCalcResult,{display:"hidden"});
                dispatchContent(calcResult);
                setTimeout(() => {
                    dispatchContent(rotatedCalcResult);
                    setTimeout(() => {
                        dispatchContent(hiddenCalcResult);   
                        dispatchMainmark(mainMarkProp); 
                    }, rotateTransitionTime_s*1000);
                }, transitionTime_s*1000);
        }


    render(){
        const colorObj = new ColorObjController();
        return(
            <div className={this.props.classes.position}>
                <Fab onClick={()=>(this._shrinkContent(this.props))} style={{
                    backgroundColor: colorObj.randomColor()["500"]
                }}>
                    <Typography variant={"button"}>
                        Close
                    </Typography>
                </Fab>
            </div>
        );
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(BackButton));
