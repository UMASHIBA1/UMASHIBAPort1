import * as React from 'react';
import { Paper,Typography } from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeToolsProps } from '../../redux/actions/action';
import { ChangeToolsPropsAction, } from '../../types/redux/actions';
import { ChangeToolsPropsActionWithDispatch } from '../../types/redux/map-dispatch-to-props';
import { connect } from 'react-redux';
import { noCalculateMainMarkProps} from '../../types/common/mainmarks';
import EventListener from 'react-event-listener';
import MainMarkMeta, { mainMarkStyles } from './MainMarkMeta';
import {MainMarkMetaType} from '../../types/common/mainmarks';
import { mapStateToPropsMainMarksType } from '../../types/redux/map-state-to-props';
import ToolsPropsCreater from '../../systems/MainMarks/tools-props-creater';

const mapStateToProps = (state:reduxState): mapStateToPropsMainMarksType => ({
    mainMarkProps:  Object.assign({},state.toolsProps)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeToolsProps: (payload: ChangeToolsPropsAction["payload"]) => (dispatch(ChangeToolsProps(payload)))
})


type Props = ReturnType<typeof mapDispatchToProps> & MainMarkMetaType;

class Tools extends MainMarkMeta<Props>{

    _changeTopLeftWidthHeight(nowState: noCalculateMainMarkProps,changeToolsProps: ChangeToolsPropsActionWithDispatch): void{
        if(this._resizeTimer !== 0){
            window.clearTimeout(this._resizeTimer);
        }
        this._resizeTimer = window.setTimeout(()=>{
            const calcObj = new ToolsPropsCreater(nowState);
            const topLeftWidthHeight = calcObj.createProps();
            changeToolsProps(topLeftWidthHeight);
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
            rotate
        } = this.props.mainMarkProps;
        return (
            <React.Fragment>
                <Paper elevation={24} className={`${this.props.classes.outline} ${this.props.classes.paper}`}
                style={{
                    top,
                    left,
                    width: widthHeight,
                    height: widthHeight,
                    borderWidth,
                    borderColor: this._colorObj.specifiedColor(borderColor)[300],
                    transform: `rotate(${rotate}deg)`
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
                            <Typography color={'error'} align={'center'} variant={this.props.mainMarkProps.fontVariant} className={this.props.classes.centerWord} style={{
                                color: wordColor,
                                transform: `rotate(-${rotate}deg)`
                            }}>
                                {word}
                            </Typography>
                        </Paper>
                    </Paper>
                </Paper>
                <EventListener target='window' onResize={()=>(this._changeTopLeftWidthHeight({word,wordColor,borderColor,rotate},this.props.changeToolsProps))}></EventListener>
            </React.Fragment>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(mainMarkStyles)(Tools));
