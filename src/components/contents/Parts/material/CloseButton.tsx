import * as React from 'react';
import { Theme, Fab, Typography } from '@material-ui/core';
import { StyleRules, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dispatch } from 'redux';
import { ChangeAboutMeContentPropsAction, ChangeCreatedContentPropsAction, ChangeToolsContentPropsAction, ChangeContactContentPropsAction, ChangeAboutMePropsAction, ChangeCreatedPropsAction, ChangeToolsPropsAction, ChangeContactPropsAction } from '../../../../types/redux/actions';
import { ChangeAboutMeContentProps, ChangeCreaetedContentProps, ChangeToolsContentProps, ChangeContactContentProps, ChangeAboutMeProps, ChangeCreatedProps, ChangeToolsProps, ChangeContactProps } from '../../../../redux/actions/action';
import { contentType } from '../../../../types/common/mainmarks';
import ContentPropsCreater from '../../../../systems/Contents/content-props-creater';
import { reduxState } from '../../../../types/redux/reducer';
import { connect } from 'react-redux';


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
    ChangeCreatedContentProps: (payload:ChangeCreatedContentPropsAction["payload"]) => (dispatch(ChangeCreaetedContentProps(payload))),
    ChangeToolsContentProps: (payload:ChangeToolsContentPropsAction["payload"]) => (dispatch(ChangeToolsContentProps(payload))),
    ChangeContactContentProps: (payload:ChangeContactContentPropsAction["payload"]) => (dispatch(ChangeContactContentProps(payload))),
    ChangeAboutMeProps: (payload: ChangeAboutMePropsAction["payload"]) => (dispatch(ChangeAboutMeProps(payload))),
    ChangeCreatedProps: (payload: ChangeCreatedPropsAction["payload"]) => (dispatch(ChangeCreatedProps(payload))),
    ChangeToolsProps: (payload: ChangeToolsPropsAction["payload"]) => (dispatch(ChangeToolsProps(payload))),
    ChangeContactProps: (payload: ChangeContactPropsAction["payload"]) => (dispatch(ChangeContactProps(payload)))
});

const mapStateToProps = (state:reduxState) => ({
    aboutMeProps: state.aboutMeProps,
    createdProps: state.createdProps,
    toolsProps: state.toolsProps,
    contactProps: state.contactProps,
    aboutMeContentProps: state.aboutMeContentProps,
    createdContentProps: state.createdContentProps,
    toolsContentProps: state.toolsContentProps,
    contactContentProps: state.contactContentProps
});

type Props = 
WithStyles<typeof styles> & 
ReturnType<typeof mapDispatchToProps> & 
ReturnType<typeof mapStateToProps> &
GalapagosProps;

class BackButton extends React.Component<Props> {

    private _judgeStateAndDispatch(props:Props){
        let state: any;
        let mainMarkState: any;
        let dispatchContent: any;
        let dispatchMainmark: any;
        if(props.contentType==="AboutMe"){
            state = props.aboutMeContentProps;
            mainMarkState = props.aboutMeProps;
            dispatchContent = props.ChangeAboutMeContentProps;
            dispatchMainmark = props.ChangeAboutMeProps;
        }else if(props.contentType==="Created"){
            state = props.createdContentProps;
            mainMarkState = props.createdProps;
            dispatchContent = props.ChangeCreatedContentProps;
            dispatchMainmark = props.ChangeCreatedProps;
        }else if(props.contentType==="Tools"){
            state = props.toolsContentProps;
            mainMarkState = props.toolsProps;
            dispatchContent = props.ChangeToolsContentProps;
            dispatchMainmark = props.ChangeToolsProps;
        }else{
            state = props.contactContentProps;
            mainMarkState = props.contactProps;
            dispatchContent = props.ChangeContactContentProps;
            dispatchMainmark = props.ChangeContactProps;
        }
        return {state,mainMarkState,dispatchContent,dispatchMainmark};
    }


    private _shrinkContent(props:Props):void{

        const {state,mainMarkState,dispatchContent,dispatchMainmark} = this._judgeStateAndDispatch(props);
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
            const initialMainMarkProps = Object.assign({},mainMarkState,{display:"flex"});
                dispatchContent(calcResult);
                setTimeout(() => {
                    dispatchContent(rotatedCalcResult);
                    setTimeout(() => {
                        dispatchContent(hiddenCalcResult);   
                        dispatchMainmark(initialMainMarkProps); 
                    }, rotateTransitionTime_s*1000);
                }, transitionTime_s*1000);
        }


    render(){
        return(
            // <KeyboardBackSpace />
            <div className={this.props.classes.position}>
                <Fab onClick={()=>(this._shrinkContent(this.props))}>
                    <Typography variant={"button"}>
                        Close
                    </Typography>
                </Fab>
            </div>
        );
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(BackButton));
